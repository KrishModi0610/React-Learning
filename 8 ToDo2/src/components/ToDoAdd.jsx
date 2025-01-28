import styles from './ToDoAdd.module.css'

function ToDoAdd() {
    return <div className="container">
        <div className={`${styles["kg-row"]} row`}>
          <div className="col-md-6 col-12">
            <input
              type="text"
              name=""
              id="toDoList"
              placeholder="Enter ToDo Here"
            />
          </div>
          <div className="col-md-4 col-5">
            <input type="date" name="date" id="date" placeholder="dd/mm/yyyy" />
          </div>
          <div className="col-md-2 col-5">
            <button type="button" className={`${styles["kg-button"]} btn btn-success`}>
              Add
            </button>
          </div>
        </div>
    </div>
}

export default ToDoAdd;