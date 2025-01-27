function Hello() {
  let name = "Krish";
  let rollNo = 32;
  function fullName() {
    return "Krish Jayekumar modi";
  }
  return (
    <p>
      {" "}
      Hello My Name is {name} and my full name is {fullName()} and my roll
      number is : {rollNo}
    </p>
  );
}

export default Hello;
