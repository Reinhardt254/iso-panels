const HomePage = () => {
  return (
    <section>
      {/* <!-- ======================================================Navbar======================= --> */}

      <div class="home">
        <div class="home-container">
          <div class="home-layout">
            <img src="./home.jpg" alt="Home-image" class="home-layout-image small-hidden" />
            <img src="./mobile/homemob.jpg" alt="Home-image" class="home-layout-image large-hidden" />
            <div class="home-layout-content">
              <div class="home-layout-heading">
                QUALITY ROOFING AND WALL PANELS
              </div>
              <div class="home-layout-paragraph">
                Iso Panels is a manufacturer specializing in insulation roofing
                and wall panels with a focus on cutting-edge technology and
                premium materials
              </div>
              <div class="home-layout-button">
                <a href="/about" class="home-layout-btn-contact">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

          {/* <!--===========================================================================HOME ABOUT========================================================================--> */}

          <div class="home-about">
            <div class="home-about-container">
              <div class="home-about-image-container small-hidden">
                <img
                  src="./homeabout.jpg"
                  alt="about-image"
                  class="home-about-image-lg1"
                />

                <img
                  src="./homeabout2.jpg"
                  alt="about-image"
                  class="home-about-image-lg2"
                />
              </div>
              <div class="home-about-text">
                <div class="home-about-heading">About ISO Panels</div>
                <div class="paragraph about-p">
                  Iso Panels Limited is a leading provider of high quality Iso
                  Panels based in Naivasha Kenya. With a commitment to
                  excellence and innovation, we have established ourselves as a
                  trusted name in the panel manufacturing industry.
                </div>
                <div class="paragraph about-p">
                  At Iso Panels Limited, we specialize in production of
                  top-quality ISO panels and roofing materials that are used in
                  a wide range of construction projects. Our panels and roofing
                  materials are designed to meet the highest standards of
                  performance nad durability.
                </div>
                <div class="home-about-button about-p">
                  <a href="/about">Read More</a>
                </div>
              </div>
              {/* -----------------mob image----------------- */}
              <img
                src="./mobile/homeaboutmob.jpg"
                alt="about-image"
                class="home-about-image large-hidden"
              />
            </div>
          </div>

          {/* <!-- ====================================================================HOME WHY CHOOSE US============================================================================== --> */}

          <div class="home-why-choose-us">
            <div class="home-why-choose-us-content-heading-h1">
              Why Choose Us
            </div>
            <div class="why-choose-us-cards-container">
              <div class="why-choose-us-cards why-choose-us-cards-ltr mb">
                <img
                  src="./Icon 1.png"
                  alt="Top quality"
                  class="choose-icon"
                  loading="lazy"
                />
                <div class="why-choose-us-cards-heading">Top Quality</div>

                <div class="paragraph choose-p">
                  We pride ourselves on delivering exceptional quality products.
                </div>
              </div>
              <div class="why-choose-us-cards mt">
                <img
                  src="./Icon 2.png"
                  alt="Top quality"
                  class="choose-icon"
                  loading="lazy"
                />
                <div class="why-choose-us-cards-heading">Trusted Expertise</div>

                <div class="paragraph choose-p">
                  With years of experience in the industry, we have earned the
                  trust of clients across Kenya and beyond.
                </div>
              </div>

              <div class="why-choose-us-cards mb">
                <img
                  src="./Icon 3.png"
                  alt="Top quality"
                  class="choose-icon"
                  loading="lazy"
                />
                <div class="why-choose-us-cards-heading">
                  Cutting-Edge Technology
                </div>

                <div class="paragraph choose-p">
                  We invest in state of the art machinery and equipment to
                  ensure precision and efficiency in our manufacturing
                  processes.
                </div>
              </div>

              <div class="why-choose-us-cards why-choose-us-cards-rbr mt">
                <img
                  src="./Icon 4.png"
                  alt="Top quality"
                  class="choose-icon"
                  loading="lazy"
                />
                <div class="why-choose-us-cards-heading">Customization</div>

                <div class="paragraph choose-p">
                  We offer tailored solutions to meet specific project
                  requirements, providing flexibility and design freedom.
                </div>
              </div>
            </div>

            <div class="why-choose-us-button">
              <a href="/contact">Get in touch</a>
            </div>
          </div>

          {/* <!-- =================================OUR PRODUCTS================================================================================ --> */}

          {/* <!-- =================================DRIVING INNOVATION================================================================================ --> */}
          <div class="driving-innovation">
            <div class="driving-innnovation-container">
              <img
                src="./machine.jpg"
                alt="Driving innovation"
                class="driving-innovation-image"
                loading="lazy"
              />
              <div class="driving-innovation-content">
                <div class="driving-innovation-h1">Driving Innovation</div>
                <div class="driving-innovation-h1">Powering Progress</div>
                <div class="paragraph driving-innovation-p">
                  With years of experience in the industry, we have earned the
                  trust of clients across Kenya and beyond.
                </div>
                <div class="driving-innovation-button button">
                  <a href="/contact">Ask a question</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
