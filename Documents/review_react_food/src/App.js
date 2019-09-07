import React from 'react';
import axios from "axios";
import Food from "./Food.js";
import "./App.css";

class App extends React.Component {
  state = {
    isLoding: true,
    recipes: []
  }
  /*getFoods = async () => {
    eat = await (axios("https://www.food2fork.com/api/search?key=258a95d26965d38024d539e15e54c1cf"))
  }*/
  getFoods = async () => {
    const {data:{recipes}} = await axios.get("https://www.food2fork.com/api/search?key=258a95d26965d38024d539e15e54c1cf");
    console.log(recipes);
    this.setState({ recipes, isLoding : false });
  };

  componentDidMount = () => {
    this.getFoods();

    /*return (
      this.food()
      this.setState.foods = { eat.recipes, isLoding: false }
    )
    */
    // api 갖고오기
    // isLoding false로 바꾸기

  }
  render() {
    const { isLoding, recipes } = this.state;
    return(
      <section className="container">
        {isLoding
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>            
          )
          : (
            <div className="foods">
              {
                recipes.map(aa => (
                  <Food
                    key = {aa.recipe_id}
                    title={aa.title}
                    publisher={aa.publisher}
                    poster={aa.image_url}
                  />
                ))
              }
            </div>
          )}
      </section>
    )
  }
}

export default App;