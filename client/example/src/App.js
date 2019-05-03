import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header>
          <nav id='headerNav'>
            <a href="#home">
                <h1 id='title'>
                    <span class='normalWhite'>FASHION WORLD</span>
                </h1>
            </a>
            <div id='search'>
                <input type="text" list="productList" placeholder="Търси в уебсайта..." 
                  id='searchItem' maxlength='30' name='searchItem'/>
                <datalist id="productList">
                </datalist>
                <button id='searchByTitle'>
                    <span>&#8981;</span>
                </button>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
