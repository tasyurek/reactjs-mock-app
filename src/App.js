import React, { Component } from "react";
import FilterableProductTable from "./FilterableProductTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mock App</h1>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
