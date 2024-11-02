//状態遷移関数(どの状態の際にどのボタンを押下したら、どの状態に遷移するか)
export function calculate(button: string, state: State): State {
  //関数の戻り値をStateにしておく

  //数値かどうかの確認
  if (isNumberButton(button)) {
    //現在の状態を渡す
    return handleNumberButton(button, state);
  }

  //オペレーターかどうか
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }

  //ACかどうか
  if (isAllClearButton(button)) {
    return handleAllClearButton();
  }

  //=かどうか
  if (isEqualButton(button)) {
    return handleEqualButton(state);
  }

  //少数点かどうか
  if (isDecimalButton(button)) {
    return handleDecimalButton(state);
  }

  return state;
}

export interface State {
  current: string; //現在表示している内容
  operand: number; //計算に使用する数値
  operator: string | null; //どの計算を実行しようとしているかの状態
  NextClearFlag: boolean; //クリアフラグ
}

const isNumberButton = (button: string) => {
  return (
    button === "0" ||
    button === "1" ||
    button === "2" ||
    button === "3" ||
    button === "4" ||
    button === "5" ||
    button === "6" ||
    button === "7" ||
    button === "8" ||
    button === "9"
  );
};

/////////////////////////////////////////////////////////////////////
//////         数値キーを押下した際の状態遷移                     //////
/////////////////////////////////////////////////////////////////////
const handleNumberButton = (button: string, state: State) => {
  if (state.NextClearFlag) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      NextClearFlag: false,
    };
  }

  if (state.current === "0") {
    return {
      current: button, //今表示してる値は押したボタンの値
      operand: state.operand, //他の状態はそのまま
      operator: state.operator,
      NextClearFlag: false,
    };
  }

  //表示が0以外の場合
  return {
    current: state.current + button, //現在のボタンのラベルを足す
    operand: state.operand,
    operator: state.operator,
    NextClearFlag: false,
  };
};

/////////////////////////////////////////////////////////////////////
//////               ボタンが＋か−か*か/かの確認                 //////
/////////////////////////////////////////////////////////////////////
const isOperatorButton = (button: string) => {
  return button === "+" || button === "-" || button === "*" || button === "÷";
};

//オペレーターボタンが押下されたかの確認
const handleOperatorButton = (button: string, state: State) => {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      NextClearFlag: true, //＋キーなどを押下された際、数字を消すため
    };
  }

  //＋ボタンまたは－ボタンが押下されている状態で再度押下された際の計算
  const nextValue = operate(state);
  return {
    current: `${nextValue}`, //
    operand: nextValue,
    operator: button,
    NextClearFlag: true, //＋キーなどを押下された際、数字を消すため
  };
};

/////////////////////////////////////////////////////////////////////
//////                   ACかの確認                             //////
/////////////////////////////////////////////////////////////////////
const isAllClearButton = (button: string) => {
  return button === "AC";
};

const handleAllClearButton = () => {
  return {
    current: "0",
    operand: 0,
    operator: null,
    NextClearFlag: false, //表示内容を全部消す必要はない
  };
};

/////////////////////////////////////////////////////////////////////
//////                    =かの確認                             //////
/////////////////////////////////////////////////////////////////////
const isEqualButton = (button: string) => {
  return button === "=";
};

const handleEqualButton = (state: State) => {
  if (state.operator === null) {
    //＋キー等が押下されているか確認
    return state;
  }

  const nextValue = String(operate(state));
  return {
    current: nextValue,
    operand: 0,
    operator: null,
    NextClearFlag: true, //数字を押下した際は表示内容を消す
  };
};

/////////////////////////////////////////////////////////////////////
//////                  少数点かの確認                          //////
/////////////////////////////////////////////////////////////////////
const isDecimalButton = (button: string) => {
  return button === ".";
};

const handleDecimalButton = (state: State) => {
  //表示されている数値に少数点が含まれている場合は何もしない
  //表示されている数値に少数点が含まれていない場合、小数点を付与する
  if (state.current.indexOf(".") !== -1) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    NextClearFlag: false,
  };
};

/////////////////////////////////////////////////////////////////////
//////                    計算部分                              //////
/////////////////////////////////////////////////////////////////////
const operate = (state: State) => {
  const current = parseFloat(state.current); //parseFloat 文字列を浮動小数点数に置き換え
  if (state.operator === "+") {
    return state.operand + current;
  }

  if (state.operator === "-") {
    return state.operand - current;
  }

  if (state.operator === "*") {
    return state.operand * current;
  }

  if (state.operator === "÷") {
    return state.operand / current;
  }

  return current;
};
