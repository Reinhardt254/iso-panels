"use client";

import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="/">
        <img
          src="/Logo.png"
          alt="logo"
          class="navbar-logo-img"
          loading="lazy"
        />
        </a>
      </div>
      <div class="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/products">Products</a>
        {/* <a href="/contact">Contact</a> */}
      </div>
      <div class="contact-btn">
        <img
          src="./search-icon.png"
          alt="logo"
          class="search-icon"
          loading="lazy"
        />
        <a href="/contact">Contact Us</a>
      </div>

      <div onClick={() => setToggle(true)} class="toggle-icon-container">
        <img
          src="/menu.png"
          class="toggle-icon"
          alt="menu-icon"
          loading="lazy"
        />
      </div>
      {toggle && (
        <div 
          class="toggle-container"
          id="menu"
          >
          <div className="toggle-content">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>

            <div onClick={() => setToggle(false)}>
              <img
                src="/close.png"
                class="close-icon"
                alt="close-icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
