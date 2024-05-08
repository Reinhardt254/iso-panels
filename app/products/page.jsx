import React from "react";

const Products = () => {
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
          <div class="products-container-p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh
          </div>

          <div class="products-cards-container">
            <div class="product-cards">
              <img
                src="./isopanel&accessories.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/panelsandaccessories">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Panels and Accesories</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <img
                src="./aluminiumprofiles.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/aluminiumProfiles">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Aluminum Profiles</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <img
                src="./roofingproducts.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/roofing">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Roofing Sheets</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <img
                src="./coldroomproducts.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/coldroomequipments">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Cold Room Equipment</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <img
                src="./airconditioning.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/airconditioning">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">
                  Air-Conditioning Equipment
                </div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <img
                src="./hvacproducts.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/HVACinstallation">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">HVAC Installation</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
                </div>
              </div>
            </div>

            <div class="product-cards">
              <img
                src="./consultancy&design.jpg"
                alt=""
                class="product-card-image"
                loading="lazy"
              />
              <div>
                <a href="/products/consultancyanddesign">
                  <img
                    src="./+.png"
                    alt="plus-icon"
                    class="product-plus-icon"
                    loading="lazy"
                  />
                </a>
              </div>

              <div class="products-cards-text">
                <div class="products-cards-text-h1">Consultancy and Design</div>
                <div class="products-cards-text-p">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh
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
