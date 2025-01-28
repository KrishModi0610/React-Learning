import styles from './ToDoAdd.module.css'

function ToDoItem({ toDoName, toDoDate }) {
  return (
    <div className="container">
      <div className={`${styles["kg-row"]} row`}>
        <div className="col-md-6 col-5">{toDoName}</div>
        <div className="col-md-4 col-3">{toDoDate}</div>
        <div className="col-md-2 col-2">
          <button type="button" className={`${styles["kg-button"]} btn btn-danger`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
