import React from 'react'

const Footer = () => {
  return (
   <div class="footer">
   <div class="footer-content">
      <div class="footer-logo">
         <img
            src="./Logo white.png"
            alt="Footer-logo"
            class="footer-logo-image"
            loading="lazy"
         />
      </div>

      <div class="footer-links">
         <a>Home</a>
         <a>About Us</a>
         <a>Products</a>
         <a>Contact</a>
      </div>

      <div class="footer-address">
         <div class="footer-address-h1">Naivasha,</div>
         <div class="footer-address-h1">Kenya</div>
      </div>
     </div>
     <div class="footer-rights">
      <div class="footer-rights-h1">2024 ISO PANELS. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer