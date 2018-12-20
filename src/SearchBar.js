import React, { Component } from "react";
import ProductTable from "./ProductTable";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: "",
      checkStock: false
    };
  }

  handleChange = e => {
    this.setState({
      searchedText: e.target.value
    });
  };

  handleCheckBox = e => {
    this.setState(state => ({
      checkStock: !state.checkStock
    }));
  };

  render() {
    if (this.props.products.length) {
      if (this.state.checkStock) {
        var products = this.props.products.filter(
          product =>
            product.name.toLowerCase().includes(this.state.searchedText) &&
            product.stocked
        );
      } else {
        var products = this.props.products.filter(product =>
          product.name.toLowerCase().includes(this.state.searchedText)
        );
      }
    }

    return (
      <div>
        <form className="searchBar">
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
        <ProductTable products={products} />
      </div>
    );
  }
}

export default SearchBar;
