import React from 'react';
import { Link } from 'react-router-dom';

export class Product extends React.Component {
  render({ match }) {
    return (
      <div>Product ID: { match.params.id }</div>
    )
  }
}
