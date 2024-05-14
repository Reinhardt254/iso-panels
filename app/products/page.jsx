"use client";

import { useState } from "react";

const Products = () => {
  const [panel, setPanel] = useState(false);
  const [aluminium, setAluminium] = useState(false);
  const [roofing, setRoofing] = useState(false);
  const [coldRoom, setColdRoom] = useState(false);
  const [aircondition, setAirCondition] = useState(false);
  const [hvac, setHvac] = useState(false);
  const [consultancy, setConsultancy] = useState(false);

  return (
    <section>
      <div class="product">
        <div class="product-layout">
          <img
            src="./products.jpg"
            alt="Products-Home-Page"
            class="product-layout-image"
            loading="lazy"
          />
          <div class="product-layout-text">Products</div>
        </div>

        <div class="products-container">
          <div class="products-cards-container">
            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./isopanel&accessories.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {panel && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                      </div>

                      <div onClick={() => setPanel(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setPanel(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Panels and Accesories</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./aluminiumprofiles.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {aluminium && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh1
                      </div>

                      <div onClick={() => setAluminium(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setAluminium(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Aluminum Profiles</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./roofingproducts.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {roofing && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                      </div>

                      <div onClick={() => setRoofing(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setRoofing(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Roofing Sheets</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./coldroomproducts.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {coldRoom && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh9
                      </div>

                      <div onClick={() => setColdRoom(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setColdRoom(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Cold Room Equipment</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh9
                </div>
              </div>
            </div>

            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./airconditioning.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {aircondition && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh9
                      </div>

                      <div onClick={() => setAirCondition(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setAirCondition(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">
                  Air-Conditioning Equipment
                </div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh9
                </div>
              </div>
            </div>

            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./hvacproducts.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {hvac && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh9
                      </div>

                      <div onClick={() => setHvac(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setHvac(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">HVAC Installation</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh9
                </div>
              </div>
            </div>

            <div class="product-cards">
              <div class="product-image">
                <img
                  src="./consultancy&design.jpg"
                  alt=""
                  class="product-card-image"
                  loading="lazy"
                />
                {consultancy && (
                  <div class="overlay-content" id="overlay-content">
                    <div class="home-product-card-overlay">
                      <div class="home-product-card-overlay-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibhLorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh9
                      </div>

                      <div onClick={() => setConsultancy(false)}>
                        <img
                          src="./close.png"
                          alt="plus-icon"
                          class="close-popup-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <img
                src="./+.png"
                alt="plus-icon"
                class="product-plus-icon"
                loading="lazy"
                onClick={() => setConsultancy(true)}
              />

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Consultancy and Design</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh9
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="products-contact-container">
          <div class="products-contact-h1">
            WOULD YOU LIKE TO KNOW IF WE PROVIDE A SPECIFIC SERVICE OR PRODUCT?
          </div>

          <div class="products-contact-h2">
            REACH OUT TO US SO WE CAN PERSONALLY ASSIST YOU
          </div>

          <div class="products-contact-button">
            <a href="/contact">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
