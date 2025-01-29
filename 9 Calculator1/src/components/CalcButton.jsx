import styles from './CalcButton.module.css'

const CalcButton = ({item}) => {
    return <button className={`${styles["btn"]} btn btn-light`}>{item}</button>
}

export default CalcButton;