import styles from './ListItem.module.css'
const ListItem = (props) => {
  return (
    <>
      <li className={`list-group-item ${styles["km-items"]}`}>
        <span className={`${styles["km-span"]}`}>{props.foodItem}</span>
      </li>
    </>
  );
};

export default ListItem;
