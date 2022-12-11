import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
import { productsList } from "./data.json";
import "./styles.css";

export default class App extends Component {
  state = {
    products: productsList,
    categories: {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false
    }
  };

  handleChange = (e) => {
    const { name } = e.target;

    this.setState((prevState) => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name]
        }
      };
    });
  };

  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter((category) => category[1])
      .map((category) => category[0]);
    const filteredProducts = this.state.products.filter(({ category }) =>
      checkedProducts.includes(category)
    );

    return (
      <div className="App">
        <Checkbox
          id="1"
          title="Banglore"
          name="first"
          checked={this.state.categories.first}
          handleChange={this.handleChange}
        />

        <Checkbox
          id="2"
          title="Pune"
          name="second"
          handleChange={this.handleChange}
          checked={this.state.categories.second}
        />
        <Checkbox
          id="3"
          title="Chennai"
          name="third"
          handleChange={this.handleChange}
          checked={this.state.categories.third}
        />
        <Checkbox
          id="4"
          title="Noida"
          name="fourth"
          handleChange={this.handleChange}
          checked={this.state.categories.fourth}
        />
        <Checkbox
          id="5"
          title="Hydrabad"
          name="fifth"
          handleChange={this.handleChange}
          checked={this.state.categories.fifth}
        />
        <Checkbox
          id="6"
          title="Coimbatore"
          name="sixth"
          handleChange={this.handleChange}
          checked={this.state.categories.sixth}
        />
        <Checkbox
          id="7"
          title="Gurugram"
          name="seventh"
          handleChange={this.handleChange}
          checked={this.state.categories.seventh}
        />
        <ProductList
          products={
            filteredProducts.length === 0
              ? this.state.products
              : filteredProducts
          }
        />
      </div>
    );
  }
}
