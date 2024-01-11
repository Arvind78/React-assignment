import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"

// Footer component containing navigation links and copyright information
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white py-3">
      {/* Footer content structure using Bootstrap grid system */}
      <div className="row justify-content-center align-center mt-3 responsive">

        {/* Women category */}
        <div className="col-lg-3 col-md-6 col-sm-12 footer-menu">
          <h5>Women</h5>
          <ul className="list-unstyled">
            <li>Dresses</li>
            <li>Pants</li>
            <li>Skirts</li>
          </ul>
        </div>

        {/* Men category */}
        <div className="col-lg-2 col-md-6 col-sm-12 footer-menu">
          <h5>Men</h5>
          <ul className="list-unstyled">
            <li>Shirts</li>
            <li>Pants</li>
            <li>Hoodies</li>
          </ul>
        </div>

        {/* Kids category */}
        <div className="col-lg-2 col-md-6 col-sm-12 footer-menu">
          <h5>Kids</h5>
        </div>

        {/* Links category */}
        <div className="col-lg-2 col-md-6 col-sm-12 footer-menu">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><a href="Home" className="text-white">Home</a></li>
            <li><a href="Login" className="text-white">Login</a></li>
            <li><a href="Contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Copyright */}
      <div className="row justify-content-center text-center mt-3">
        <p>Copyright © E-Commerce 2022–23</p>
      </div>
    </div>
  );
};

export default Footer;
