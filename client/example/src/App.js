import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import './App.css';


class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'Log In', link: '#logIn' },
      { label: 'Cart', link: '#cart' },
      { label: 'Help', link: '#help' },
    ];

    return (
      <div className="App">
        
        <header>
            <NavMenu links={links}  />
         </header>
       </div>
    );
  }
}

export default App;
