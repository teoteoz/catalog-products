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

export class Catalog extends React.Component {
  render () {
    return (
      <div>
        <h1>Catalog</h1>
        {
          /*
          products.map(
            product =>
              <Link to={'/product/' + product.id}>{product.label}</Link>
          )
          */
          products.map(
            ({id, label}) =>
              <Link to={'/product/' + id}>{label}</Link>
          )
        }
      </div>
    )
  }
}
