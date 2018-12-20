import React, { Component } from "react";
import FilterableProductTable from "./FilterableProductTable";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="filterableProductTable">
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
