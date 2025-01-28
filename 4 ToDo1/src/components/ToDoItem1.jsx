function ToDoItem1() {
  let toDoName = "Buy Milk";
  let toDoDate = "4/10/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-md-6 col-5">{toDoName}</div>
        <div class="col-md-4 col-3">{toDoDate}</div>
        <div class="col-md-2 col-2">
          <button type="button" class="kg-button btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
