import FoodItem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  let foodItems = ["Ghee", "Roti", "Green Veggies", "Pasta"];
  return (
    <>
      <h1 className="food-heading">Healthy Food Items</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
    </>
  );
}

export default App;
