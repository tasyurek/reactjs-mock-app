import React, { Component } from "react";
import ProductTable from "./ProductTable";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: "",
      isCheck: false
    };
  }

  handleChange = e => {
    this.setState({
      searchedText: e.target.value
    });
  };

  handleCheckBox = e => {
    this.setState(state => ({
      isCheck: !state.isCheck
    }));
  };

  render() {
    const sportingGoods = this.props.products.filter(
      product =>
        product.name.toLowerCase().includes(this.state.searchedText) &&
        product.category === "Sporting Goods" &&
        this.state.isCheck === product.stocked
    );

    const electronics = this.props.products.filter(
      product =>
        product.name.toLowerCase().includes(this.state.searchedText) &&
        product.category === "Electronics" &&
        this.state.isCheck === product.stocked
    );

    return (
      <div>
        <form>
          <div>
            <input type="text" onChange={this.handleChange} />
          </div>
          <div>
            <label>
              <input type="checkbox" onChange={this.handleCheckBox} /> Show only
              products in stock
            </label>
          </div>
        </form>
        <ProductTable products={electronics} category="Electronics" />
        <ProductTable products={sportingGoods} category="Sporting Goods" />
      </div>
    );
  }
}

export default SearchBar;
