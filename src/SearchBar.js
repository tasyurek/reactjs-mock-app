import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchedText: ""
  };

  handleChange = e => {
    this.setState({
      searchedText: e.target.value
    });
  };
  render() {
    return (
      <form>
        <div>
          <input type="text" onChange={this.handleChange} />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Show only products in stock
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
