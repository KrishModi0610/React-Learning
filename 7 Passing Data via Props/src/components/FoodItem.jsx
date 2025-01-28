import ListItem from "./ListItem";

function FoodItem({items}) {
    return<>
      <ul className="list-group">
        {items.map((item) => (
          <ListItem key={item} foodItem={item}></ListItem>
        ))}
      </ul>
    </>;
}

export default FoodItem;