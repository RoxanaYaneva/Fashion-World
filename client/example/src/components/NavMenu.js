import React  from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css'

const NavMenu = () => {
    return (
        <header>
            <div className="menu">
                <h1 id='title' className='normalWhite'>
                    FASHION WORLD
                </h1>

                <div id='search'>
                    <input type="text" list="productList" placeholder="Search..." id='searchItem'
                    name='searchItem'/>
                    <datalist id="productList"></datalist>
                    <button id='searchButton'>
                        <span>&#8981;</span>
                    </button>
                </div>
                <div className="menu__list">
                    <NavLink className="menu__link" to="/" >Home</NavLink>
                    <NavLink className="menu__link" to="/logIn">Log In</NavLink>
                    <NavLink className="menu__link" to="/cart">Cart</NavLink>
                    <NavLink className="menu__link" to="/help">Help</NavLink>
                </div>
            </div>
        </header>
    );
}

export default NavMenu;
