function ToDoAdd() {
    return <div class="container">
        <div class="row kg-row">
          <div class="col-md-6 col-12">
            <input
              type="text"
              name=""
              id="toDoList"
              placeholder="Enter ToDo Here"
            />
          </div>
          <div class="col-md-4 col-5">
            <input type="date" name="date" id="date" placeholder="dd/mm/yyyy" />
          </div>
          <div class="col-md-2 col-5">
            <button type="button" class="kg-button btn btn-success">
              Add
            </button>
          </div>
        </div>
    </div>
}

export default ToDoAdd;