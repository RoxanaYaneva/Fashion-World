import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/Login';
import Cart from './components/Cart';
import Help from './components/Help';
import Catalogue from './components/Catalogue';
import Product from './components/Product';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavMenu />
          <div>
              <Route path="/" component={Home} exact />
              <Route path="/logIn" component={LogIn} />
              <Route path="/cart" component={Cart} />
              <Route path="/help" component={Help} />
              <Route path="/products/:sex" component={Catalogue} exact/>
              <Route path="/products/:sex/:category" component={Catalogue} exact/>
              <Route path="/product/:sex/:id" component={Product} />

          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
