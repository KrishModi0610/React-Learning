import CalcButton from "./calcButton";
import styles from "./BtnContainer.module.css";

const BtnContainer = ({calcItems}) => {
    return (
      <div className={styles.btnContainer}>
        {
          calcItems.map( item => (
            // <CalcButton item={item}></CalcButton>
            <button className={`${styles["btn"]} btn btn-light`}>{item}</button>
          ))
        }
      </div>
    );
}

export default BtnContainer;