import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.name.toLowerCase().indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <div className="productTable">
        <div className="productHeader">
          <span>Name</span>
          <span>Price</span>
        </div>
        <div>{rows}</div>
      </div>
    );
  }
}

export default ProductTable;
