import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <div className="categoryRow">
        <span colSpan="2">{category}</span>
      </div>
    );
  }
}

export default ProductCategoryRow;
