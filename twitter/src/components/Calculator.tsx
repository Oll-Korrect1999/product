import CalculatorPanel from "./CalculatorPanel";
import Display from "./Display";
import { calculate, State } from "../logic/calculate";
import { useState } from "react";

export default function Calculator() {
  //Hookをしようして持たせる
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    NextClearFlag: false, //最初にクリアすべきか
  });

  const buttonHandler = (code: string) => {
    const nextState = calculate(code, state); //ここでlogic内のcalculate.tsxを呼び出し
    setState(nextState); //次の状態が決定したら値をセット
  };
  /* ButtonPanelコンポーネントの属性としてbuttonHandlerを指定 */
  return (
    <div>
      <CalculatorPanel value={state.current} buttonHandler={buttonHandler} />
    </div>
  );
}
