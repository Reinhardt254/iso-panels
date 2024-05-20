import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="contact">
        <div class="contact-layout">
          <img
            src="./contact.jpg"
            alt="contact-layout-image"
            class="contact-layout-image small-hidden"
            loading="lazy"
          />
          <img
            src="./mobile/contactmob.jpg"
            alt="contact-layout-image"
            class="contact-layout-image large-hidden"
            loading="lazy"
          />
          <div class="contact-layout-text">Contact</div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
