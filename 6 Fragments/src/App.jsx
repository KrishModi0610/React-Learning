//  ************ Fragments **************
// import React from "react";
// function App() {
//   return (
//     <React.Fragment>
//       <h1>List Group</h1>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">Dal</li>
//         <li class="list-group-item">Green Vegies</li>
//         <li class="list-group-item">Salad</li>
//         <li class="list-group-item">Fruits</li>
//         <li class="list-group-item">Milk</li>
//       </ul>
//     </React.Fragment>
//   );
// }

// export default App

// ******** Map Function *********
// function App() {
//   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ************ Conditional Rendering **************
function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // *** if-else ****
  // if (foodItems.length === 0) {
  //   return <p>Using <b>If-Else</b> Please Add Food items which are healthy.</p>;
  // }

  return (
    <>
      <h1>Healthy Food</h1>

      {/* // *** Using Ternary Operator */}
      {/* {foodItems.length === 0 ? (
        <p>
          Using <b>Ternary Operator</b> Please Add Food items which are healthy.
        </p>
      ) : null} */}

      {/* // Using Logical Operators  ==> 1st value is condition and if false then implement next condition */}
      {foodItems.length === 0 && <p>I am still Hungry Using <b>Logical Conditions</b></p>}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
