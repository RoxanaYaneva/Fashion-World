import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import './App.css';


class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'Log In', link: '#about' },
      { label: 'Cart', link: '#contact-us' },
      { label: 'FAQ', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
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
