import React  from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css'

const NavMenu = () => {
    return (
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Продукти</span>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/products/men" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Мъже
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/products/men/jeans">Дънки</a>
                                <a class="dropdown-item" href="/products/men/tshirts">Тениски</a>
                                <a class="dropdown-item" href="/products/men/pullovers">Пуловери</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/products/women" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Жени
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/products/women/jeans">Дънки</a>
                                <a class="dropdown-item" href="/products/women/tshirts">Тениски</a>
                                <a class="dropdown-item" href="/products/women/dresses">Рокли</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       
    );
}

export default NavMenu;
