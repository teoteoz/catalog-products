import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { NavBar } from '../src/shared/NavBar';
import { HomeView } from '../src/views/home/HomeView';
import { AnotherView } from '../src/views/another/AnotherView';
import { Catalog } from '../src/views/catalog/Catalog';
import { Product } from '../src/views/product/Product';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/anotherview" component={AnotherView} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/product/:id" component={Product} />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
