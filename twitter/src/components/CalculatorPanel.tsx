import styles from "./tamplates/CalculatorPanel.module.css";

type CalculatorBoardType = {
  value: string;
  buttonHandler: (code: string) => void;
};
const CalculatorBoard = ({ value, buttonHandler }: CalculatorBoardType) => {
  return (
    <table className={styles.board}>
      {/* 数値表示部分 */}
      <tr>
        <td colSpan={4}>{value}</td>
      </tr>
      {/* 1段目 */}
      <tr>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("1")}>
            1
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("2")}>
            2
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("3")}>
            3
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("+")}>
            +
          </button>
        </td>
      </tr>
      {/* 2段目 */}
      <tr>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("4")}>
            4
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("5")}>
            5
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("6")}>
            6
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("-")}>
            -
          </button>
        </td>
      </tr>
      {/* 3段目 */}
      <tr>
        <td>
          <button className={styles.button} onClick={() => buttonHandler(".")}>
            .
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("7")}>
            7
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("8")}>
            8
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("9")}>
            9
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("*")}>
            *
          </button>
        </td>
      </tr>
      {/* 最下段 */}
      <tr>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("AC")}>
            AC
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("0")}>
            0
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("=")}>
            =
          </button>
        </td>
        <td>
          <button className={styles.button} onClick={() => buttonHandler("÷")}>
            ÷
          </button>
        </td>
      </tr>
    </table>
  );
};

export default CalculatorBoard;
