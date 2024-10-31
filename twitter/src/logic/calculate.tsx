//状態遷移関数(どの状態の際にどのボタンを押下したら、どの状態に遷移するか)
export function calculate(button: string, state: State): State { //関数の戻り値をStateにしておく

  //数値かどうかの確認
  if (isNumberButton(button)) {
    
    //現在の状態を渡す
    return handleNumberButton(button, state)

  }

  //オペレーターかどうか
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state)

  }
   
  //ACかどうか
  if (isAllClearButton(button)) {
    return handleAllClearButton()

  }

  //=かどうか
  if (isEqualButton(button)) {
    return handleEqualButton(state);
    
  }

    return state;
}

export interface State{
    current: string;         //現在表紙している内容
    operand: number;         //計算に使用する数値
    operator: string | null; //どの計算を実行しようとしているかの状態
    NextClearFlag: boolean;  //クリアフラグ
}

//ここをApp.tsxと連携させればいける気がしている
function isNumberButton(button: string) {
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
}

/////////////////////////////////////////////////////////////////////
//////         数値キーを押下した際の状態遷移                     //////
/////////////////////////////////////////////////////////////////////
function handleNumberButton(button: string, state: State): State {
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
            current: button,        //今表示してる値は押したボタンの値
            operand: state.operand, //他の状態はそのまま
            operator: state.operator,
            NextClearFlag: false
        };
    }

    //表示が0以外の場合
    return {
        current: state.current + button, //現在のボタンのラベルを足す
        operand: state.operand,
        operator: state.operator,
        NextClearFlag: false,
    };
}

/////////////////////////////////////////////////////////////////////
//////               ボタンが＋か−かの確認                       //////
/////////////////////////////////////////////////////////////////////
function isOperatorButton(button: string) {
    return button === "+" || button === "-";
}

//オペレーターボタンが押下されたかの確認
function handleOperatorButton(button: string, state: State): State {
  if (state.operator === null){
    return {
        current: state.current,
        operand: parseFloat(state.current),
        operator: button,
        NextClearFlag: true,
    }
  }

  //＋ボタンまたは－ボタンが押下されている状態で再度押下された際の計算
  const nextValue = operate(state)
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    NextClearFlag: true,
  }

}

/////////////////////////////////////////////////////////////////////
//////                   ACかの確認                             //////
/////////////////////////////////////////////////////////////////////
function isAllClearButton(button: string) {
    return button === "AC";
}

function handleAllClearButton(): State {
    return {
        current: "0",
        operand: 0,
        operator: null,
        NextClearFlag: false
    }
}

/////////////////////////////////////////////////////////////////////
//////                    =かの確認                             //////
/////////////////////////////////////////////////////////////////////
function isEqualButton(button: string) {
    return button === "=";
}

function handleEqualButton(state: State): State {
    if (state.operator === null) {
        return state
    }

    const nextValue = operate(state)
    return {
        current: `${nextValue}`,
        operand: 0,
        operator: null,
        NextClearFlag: true,
    };
}

/////////////////////////////////////////////////////////////////////
//////                    計算部分                              //////
/////////////////////////////////////////////////////////////////////
function operate(state: State): number {
    const current = parseFloat(state.current) //parseFloat 文字列を浮動小数点数に置き換え
    if (state.operator === "+") {
        return state.operand + current 
    }

    if (state.operator === "-") {
        return  state.operand - current
    }

    return current;
}

