import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '../shared/Separator';

export class NavBar extends React.Component {

  render () {
    return (
      <div>
        <Link to="/">Home</Link>
        <Separator />
        <Link to="/anotherview">AnotherView</Link>
        <Separator />
        <Link to="/catalog">Catalog</Link>
      </div>
    )
  }
}
