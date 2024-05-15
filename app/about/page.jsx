import React from "react";

const About = () => {
  return (
    <section>
      {/* <!-- ======================================================Navbar======================= --> */}
      
      <div class="about">
        <div class="about-layout-container">
          <img
            src="./about.jpg"
            alt="about-layout-image"
            class="about-layout-image"
            loading="lazy"
          />
          <div class="about-layout-text">About Us</div>
        </div>

        <div class="how-it-started">
          <div class="how-it-started-container">
            <div class="how-it-started-image-container">
              <img
                src="./about2.jpg"
                alt="How-it-started-image"
                class="how-it-started-image small-hidden"
              />
            </div>
            <div class="how-it-started-text">
              <div class="how-it-started-h1">How It Started</div>
              <div class="how-it-started-p">
                Incorporated on December 20th, 2002, ISO Panels Limited has a
                fascinating history that traces its roots back to the early days
                of the sustainable construction movement.
              </div>
              <div class="how-it-started-p">
                Our journey began with a group of passionate engineers and
                entrepreneurs who recognized the pressing need for
                energy-efficient building materials. Fueled by a shared vision
                of creating a greener future, they set out to revolutionize the
                construction industry, leading to the creation of Iso Panels
                Limited.
              </div>
            </div>
            {/* <!-- ---------------small how it started image------------------- --> */}
            <img
              src="./about2.jpg"
              alt="How-it-started-image large-hidden"
              class="how-it-started-image large-hidden"
            />
          </div>
        </div>

        <div class="about-mission">
          <div class="about-mission-text">
            <div class="about-mission-h1">Mission</div>
            <div class="about-mission-p">
              Incorporated on December 20th, 2002, ISO Panels Limited has a
              fascinating history that traces its roots back to the early days
              of the sustainable construction movement.
            </div>
            <div class="about-mission-p">
              Our journey began with a group of passionate engineers and
              entrepreneurs who recognized the pressing need for energy
              efficient building materials. Fueled by a shared vision of
              creating a greener future, they set out to revolutionize the
              construction industry, leading to the creation of Iso Panels
              Limited.
            </div>
          </div>
          <div class="about-mission-img">
            <img
              src="./mission1.jpg"
              alt="about-mission-image"
              class="about-mission-image about-top-img"
              loading="lazy"
            />
            <img
              src="./mission2.jpg"
              alt="about-mission-image"
              class="about-mission-image about-bottom-img"
              loading="lazy"
            />
          </div>

          {/* <!-- --------image small devices------- --> */}
          <div class="about-mission-image-container large-hidden">
            <img
              src="./mission1.jpg"
              alt="about-mission-image-sm"
              class="about-mission-image-sm"
              loading="lazy"
            />
          </div>
        </div>

        <div class="about-vision">
          <div class="about-vision-image-container">
            <img
              src="./vision.jpg"
              alt="about-vision-image"
              class="about-vision-image"
            />
          </div>
          <div class="about-vision-text">
            <div class="about-vision-h1">Vision</div>
            <div class="about-vision-p">
              To enhance and retain our customers base through provision of
              durable and quality panels
            </div>
          </div>

          <div class="about-mission-image-container large-hidden about-vision-image-sm">
            <img
              src="./vision.jpg"
              alt="about-mission-image-sm"
              class="about-mission-image-sm about-vision-image-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
