import styles from "./tamplates/CalculatorPanel.module.css";

type CalculatorBoardType = {
  value: string;
  buttonHandler: (code: string) => void;
};
const CalculatorBoard = ({ value, buttonHandler }: CalculatorBoardType) => {
  return (
    <div className={styles.board}>
      <div>{value}</div>
      <div>
        <button className={styles.button} onClick={() => buttonHandler("1")}>
          1
        </button>
        <button className={styles.button} onClick={() => buttonHandler("2")}>
          2
        </button>
        <button className={styles.button} onClick={() => buttonHandler("3")}>
          3
        </button>
        <button className={styles.button} onClick={() => buttonHandler("+")}>
          +
        </button>
      </div>
      <div>
        <button className={styles.button} onClick={() => buttonHandler("4")}>
          4
        </button>
        <button className={styles.button} onClick={() => buttonHandler("5")}>
          5
        </button>
        <button className={styles.button} onClick={() => buttonHandler("6")}>
          6
        </button>
        <button className={styles.button} onClick={() => buttonHandler("-")}>
          -
        </button>
      </div>
      <div>
        <button className={styles.button} onClick={() => buttonHandler(".")}>
          .
        </button>
        <button className={styles.button} onClick={() => buttonHandler("7")}>
          7
        </button>
        <button className={styles.button} onClick={() => buttonHandler("8")}>
          8
        </button>
        <button className={styles.button} onClick={() => buttonHandler("9")}>
          9
        </button>
        <button className={styles.button} onClick={() => buttonHandler("*")}>
          *
        </button>
      </div>
      <div>
        <button className={styles.button} onClick={() => buttonHandler("AC")}>
          AC
        </button>
        <button className={styles.button} onClick={() => buttonHandler("0")}>
          0
        </button>
        <button className={styles.button} onClick={() => buttonHandler("=")}>
          =
        </button>
        <button className={styles.button} onClick={() => buttonHandler("÷")}>
          ÷
        </button>
      </div>
    </div>
  );
};

export default CalculatorBoard;
