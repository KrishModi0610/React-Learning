import ToDoItem from './ToDoItem';
import styles from './ToDoItems.module.css'

const ToDoItems = ({toDoItems}) => {
    return (
      <div className={`${styles["item-container"]}`}>
        {toDoItems.map( item => <ToDoItem
          toDoDate={item.toDoDate}
          toDoName={item.toDoName}
        ></ToDoItem>
        )}
      </div>
    );
}

export default ToDoItems;