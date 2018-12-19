import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    if (this.props.products) {
      var products = this.props.products.map(p => {
        return (
          <div>
            <ProductRow name={p.name} price={p.price} />
          </div>
        );
      });
    }

    return (
      <div>
        <ProductCategoryRow category={this.props.category} />
        {products}
      </div>
    );
  }
}

export default ProductTable;
