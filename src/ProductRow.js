import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <div className="productRow">
        <span>{name}</span>
        <span>{product.price}</span>
      </div>
    );
  }
}

export default ProductRow;
