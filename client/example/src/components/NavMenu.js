import React  from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './NavMenu.css'

const NavMenu = () => {
    return (
        <div className="menu">
            <NavLink to="/">
                <h1 id='title' className='normalWhite'>
                    FASHION WORLD
                </h1>
            </NavLink>

            <div id='search'>
                <input type="text" list="productList" placeholder="Search..." id='searchItem'
                name='searchItem'/>
                <datalist id="productList"></datalist>
                <button id='searchButton'>
                    <span>&#8981;</span>
                </button>
            </div>
                <PopupState variant="popover" popupId="demo-popup-menu">
                {popupState => (
                    <React.Fragment>
                        <Button>
                            <NavLink className="menu__link" to="/products/men" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Мъже
                                <Button variant="text" {...bindTrigger(popupState)}>
                                    <ArrowDropDownIcon fontSize="large" className="dropDownArrow"/>
                                </Button>
                            </NavLink>
                        </Button>

                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                <Link class="dropdown-item" to="/products/men/jeans">Дънки</Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link class="dropdown-item" to="/products/men/tshirts">Тениски</Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link class="dropdown-item" to="/products/men/pullovers">Пуловери</Link>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
                </PopupState>
                <PopupState variant="popover" popupId="demo-popup-menu">
                {popupState => (
                    <React.Fragment>
                        <Button>
                            <NavLink className="menu__link" to="/products/women" id="navbarDropdown" role="button">
                                Жени
                                <Button variant="text" {...bindTrigger(popupState)}>
                                    <ArrowDropDownIcon fontSize="large" className="dropDownArrow"/>
                                </Button>
                            </NavLink>
                        </Button>

                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                <Link class="dropdown-item" to="/products/women/jeans">Дънки</Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link class="dropdown-item" to="/products/women/tshirts">Тениски</Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link class="dropdown-item" to="/products/women/dresses">Рокли</Link>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
                </PopupState>
                                
                
                <NavLink className="menu__link" to="/logIn">Log In</NavLink>
                <NavLink className="menu__link" to="/cart">Cart</NavLink>
                <NavLink className="menu__link" to="/help">Help</NavLink>
            </div>       
    );
}

export default NavMenu;
