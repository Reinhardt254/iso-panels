'use client'

import { useState } from "react"

const Navbar = () => {
   const [toggle, setToggle] = useState(false)

  return ( 
    <div class='navbar-container'>
      <div class='navbar-logo'>
         <img
            src="./logo.png"
            alt="logo"
            class="navbar-logo-img"
            loading='lazy'
         />
      </div>
      <div class='navbar-links'>
         <a>HOME</a>
         <a>PRODUCTS</a>
         <a>ABOUT US</a>
         <a>CONTACT</a>
      </div>
      <div class='contact-btn'>
         <a>Contact Us</a>
      </div>

      <div onClick={()=>setToggle(true)} class="toggle-icon-container">
         <img
           src="./menu.png"
           class="toggle-icon"
           alt="menu-icon"
           loading="lazy"
         />
      </div>
      {toggle &&(
       <div class="toggle-container">
         <div className="toggle-content">
            <a>HOME</a>
            <a>PRODUCTS</a>
            <a>ABOUT US</a>
            <a>CONTACT</a>

            <div onClick={()=>setToggle(false)}>
             <img
               src="./close.png"
               class="close-icon"
               alt="close-icon"
               loading="lazy"
             />
            </div>
         </div>
       </div>
      )}
    </div>
  )
}

export default Navbar