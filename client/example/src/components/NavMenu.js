import React  from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                            <Link class="nav-link dropdown-toggle" to="/products/men" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Мъже
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="/products/men/jeans">Дънки</Link>
                                <Link class="dropdown-item" to="/products/men/tshirts">Тениски</Link>
                                <Link class="dropdown-item" to="/products/men/pullovers">Пуловери</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="/products/women" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Жени
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="/products/women/jeans">Дънки</Link>
                                <Link class="dropdown-item" to="/products/women/tshirts">Тениски</Link>
                                <Link class="dropdown-item" to="/products/women/dresses">Рокли</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       
    );
}

export default NavMenu;
