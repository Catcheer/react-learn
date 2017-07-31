import React, { Component } from 'react'
import { render } from 'react-dom'

// test smile
var PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
class ProductCategoryRow extends Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}
class ProductRow extends Component {
  render() {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{ color: 'red' }}>{this.props.product.name}</span>
    return (
      <tr>
        <th>{name}</th>
        <th>{this.props.product.price}</th>
      </tr>
    )
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )

  }
}

class SearchBar extends Component {
  render() {
    return (
      <div>
        <from>
          <input type="text" placeholder='search...' />
          <br />
          <input type="checkbox" />Only show products in stock
        </from>
      </div>
    )
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }

}

render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('app')
);

