import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const electronics = this.props.products.map(p => {
      if (p.category === "Electronics") {
        return (
          <div key={Math.random()}>
            <ProductRow name={p.name} price={p.price} />
          </div>
        );
      }
      return null;
    });
    const sportingGoods = this.props.products.map(p => {
      if (p.category === "Sporting Goods") {
        return (
          <div key={Math.random()}>
            <ProductRow name={p.name} price={p.price} />
          </div>
        );
      }
      return null;
    });

    return (
      <div>
        <div className="productRow">
          <span>Name</span>
          <span>Price</span>
        </div>
        <ProductCategoryRow category="Electronics" />
        {electronics}
        <ProductCategoryRow category="Sporting Goods" />
        {sportingGoods}
      </div>
    );
  }
}

export default ProductTable;
