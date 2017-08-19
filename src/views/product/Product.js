import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: '1', label: 'Nutella'
  },
  {
    id: '2', label: 'Pane'
  },
  {
    id: '3', label: 'Latte'
  }
];

export class Product extends React.Component {

  render() {
    const product = products.find(product => product.id === this.props.match.params.id);

    return (
      <div>
        Product ID: { this.props.match.params.id }
        <h3>{product.label}</h3>
        <hr />
        <Link to="/catalog">Go back to Catalog</Link>

      </div>
    )
  }
}
