import { Component } from "react";
import "./MealFinder.css";
import MealItem from "./MealItem";

const mealList = [
  {
    mealName: "Biryani",
    price: 149,
    url: "https://assets.cntraveller.in/photos/63997ddc9ee4918a0f9a6861/16:9/w_960,c_limit/biryani%20in%20hyderabad.jpg",
    id: 1,
  },
  {
    mealName: "Chicken Curry",
    price: 89,
    url: "https://feastwithsafiya.com/wp-content/uploads/2022/03/chicken-curry-recipe-720x960.jpg",
    id: 2,
  },
  {
    mealName: "Fish Fry",
    price: 79,
    url: "https://www.spiceindiaonline.com/wp-content/uploads/2017/04/Meen-Varuval-Tilapia-Fish-Fry-2.jpg",
    id: 3,
  },
  {
    mealName: "Mutton Curry",
    price: 99,
    url: "https://www.yummytummyaarthi.com/wp-content/uploads/2015/02/1-2.jpg",
    id: 4,
  },
  {
    mealName: "Egg Fry",
    price: 59,
    url: "https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2020/08/DSC_0033.jpeg?w=1920&ssl=1",
    id: 5,
  },
  {
    mealName: "Paneer",
    price: 69,
    url: "https://www.kitchensanctuary.com/wp-content/uploads/2024/03/Paneer-Curry-square-FS.jpg",
    id: 6,
  },
  {
    mealName: "Sambar",
    price: 29,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsTlWq4mqP1OwvTLow1em2YQlEaxsxrpQnA&s",
    id: 7,
  },
  {
    mealName: "Grilled chicken",
    price: 299,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMozkkZv6pQonP3nn1BlXT2uLTWJxeshxYA&s",
    id: 8,
  },
];

class MealFinder extends Component {
  state = { userInput: mealList, fromuser: "" };

  onUserInput = (event) => {
    this.setState({ fromuser: event.target.value.toLowerCase() });
  };

  render() {
    const { userInput, fromuser } = this.state;

    const newList = userInput.filter((each) =>
      each.mealName.toLowerCase().includes(fromuser)
    );

    return (
      <div>
        <input
          type="search"
          placeholder="Enter Your favourite dish"
          onChange={this.onUserInput}
        />
        <h1>Menu</h1>
        <hr />
        <ul className="list-container">
          {newList.map((each) => (
            <MealItem key={each.id} mealDetails={each} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MealFinder;
