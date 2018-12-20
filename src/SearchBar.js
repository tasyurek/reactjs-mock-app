import React, { Component } from "react";

class SearchBar extends Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value.toLowerCase());
  };

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    return (
      <form className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <label class="container">
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          <span class="checkmark" /> Only show product in stock
        </label>
      </form>
    );
  }
}

export default SearchBar;
