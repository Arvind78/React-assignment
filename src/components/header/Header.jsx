import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

/**
 * Header component renders the navigation bar of the website.
 * Consists of a logo, search bar, login/cart buttons, and a menu.
 * Utilizes FontAwesome icons for the shopping cart.
 */
const Header = () => {
  return (
    <header>
      {/* First section of the header containing logo, search bar, login/cart buttons */}
      <section className='first-section'>
        <div className="logo">
            <h2>Ecommerce</h2>
        </div>
        <div className="searchbar">
            <input type="text" placeholder='Product name, Category name, etc.' />
            <button>Search</button>
        </div>
        <div className="login-cart">
            <button>Login</button>
            {/* Shopping cart icon */}
            <div className='cart'>
              <FontAwesomeIcon className="cart" icon={faCartShopping} />
            </div>
        </div>
      </section>
      {/* Second section of the header containing the menu */}
      <section className='second-section'>
        <ul className='menu'>
          <li>Home</li>
          <li>All Product</li>
          {/* Dropdown menu for Women */}
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              id="womenDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Women
            </a>
            <ul className="dropdown-menu" aria-labelledby="womenDropdown">
              <li><a className="dropdown-item" href="#/action-1">Dresses</a></li>
              <li><a className="dropdown-item" href="#/action-2">Pants</a></li>
              <li><a className="dropdown-item" href="#/action-3">Skirts</a></li>
            </ul>
          </li> 
          {/* Dropdown menu for Men */}
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              id="menDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Men
            </a>
            <ul className="dropdown-menu " aria-labelledby="menDropdown">
              <li><a className="dropdown-item" href="#/action-1">Shirts</a></li>
              <li><a className="dropdown-item" href="#/action-2">Pants</a></li>
              <li><a className="dropdown-item" href="#/action-3">Hoodies</a></li>
            </ul>
          </li> 
          {/* Menu items */}
          <li>Kids</li>
          <li>Contact</li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
