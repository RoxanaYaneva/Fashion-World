import React, { Component } from 'react';
import './NavMenu.css'


class NavMenu extends Component {

    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 id='title' class='normalWhite'>
                    FASHION WORLD
                </h1>

                <ul className="menu__list">
                    {linksMarkup}
                </ul>
            </nav>
        );
    }
}

export default NavMenu;
