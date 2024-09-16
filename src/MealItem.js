import "./MealItem.css";

const MealItem = (props) => {
  const { mealDetails } = props;
  const { mealName, url, price } = mealDetails;

  return (
    <li className="list-item">
      <p className="meal-name">{mealName}</p>
      <img src={url} className="image" />
      <p>Price: {price}</p>
    </li>
  );
};

export default MealItem;
