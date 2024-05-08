"use client"

import { useState } from "react"

const HomePage = () => {

   const [panel, setPanel] = useState(false);
   const [roof, setRoof] = useState(false);
   const [wall, setWall] = useState(false);


  return (
   <section>
   {/* <!-- ======================================================Navbar======================= --> */}

   <div class="home">
     <div class="home-container">
       <div class="home-layout">
         <img
           src="./home.jpg"
           alt="Home-image"
           class="home-layout-image"
         />
         <div class="home-layout-content">
           <div class="home-layout-heading">
             Iso Panels Ltd For Quality Panels
           </div>
           <div class="home-layout-paragraph">
             Iso Panels is a manufacturer specializing in insulation roofing
             and wall panels with a focus on cutting-edge technology and
             premium materials
           </div>
           <div class="home-layout-button">
             <a href="/contact">Contact Us For Free Consultation</a>
           </div>
         </div>
       </div>

       {/* <!--===========================================================================HOME ABOUT========================================================================--> */}

       <div class="home-about">
         <div class="home-about-container">
           <img
             src="./About us.png"
             alt="about-image"
             class="home-about-image"
           />
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
         </div>
       </div>

       {/* <!-- ====================================================================HOME WHY CHOOSE US============================================================================== --> */}

       <div class="home-why-choose-us">
         <div class="home-why-choose-us-content">
           <div class="home-why-choose-us-content-heading">
             <div class="home-why-choose-us-content-heading-h1">
               Why Choose Us
             </div>
             <div class="home-why-choose-us-content-heading-h2">
               Iso Panels is a manufacturer company.
             </div>
           </div>
           <div class="home-why-choose-us-content-paragraph">
             {/* <!-- <div>
                  <img
                     src=""
                     alt="icon"
                     class=""
                     loading="lazy"
                  />
               </div> --> */}
             <div class="paragraph w-c-u-p">
               Iso Panels is a manufacturer specializing in insulation,
               roofing and wall panels. With a focus on cutting-edge
               technology and premium materials.
             </div>
           </div>
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
             <div class="choose-card-btn">
               <a>Read More</a>
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
             <div class="choose-card-btn">
               <a>Read More</a>
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
             <div class="choose-card-btn">
               <a>Read More</a>
             </div>
           </div>

           <div
             class="why-choose-us-cards why-choose-us-cards-rbr mt"
           >
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
             <div class="choose-card-btn">
               <a>Read More</a>
             </div>
           </div>
         </div>

         <div class="why-choose-us-button">
           <a href="/Contact">Contact Us For Free Consultation</a>
         </div>
       </div>

       {/* <!-- =================================OUR PRODUCTS================================================================================ --> */}
       <div class="home-products">
         <div class="home-products-heading">Our Products</div>
         <div class="home-products-cards-container">
           <div class="home-products-card">
             <img
               src="./isopanel.jpg"
               alt="ISO Panel"
               class="home-products-image"
             />
             <div class="home-products-content">
               <img
                 src="./Our Product rectangle.png"
                 alt="products-text-back-ground"
                 class="home-products-card-bg-img"
               />
               <div class="home-products-text">
                 <div class="home-products-card-h1">Iso Panel</div>
                 <div 
                   class="home-products-plus-icon"
                   onClick={()=>setPanel(true)}
                   >
                   <img
                     src="./plus.png"
                     class="plus-icon"
                     alt="plus-icon"
                     loading="lazy"
                     id="plus-icon"
                   />
                 </div>
               </div>
             </div>
            
            {panel &&(
             <div id="overlay-content">
               <div class="home-product-card-overlay">
                 <div class="home-product-card-overlay-content">
                   <img
                     src="/close.png"
                     alt="close-icon"
                     class="close-popup-icon"
                     id="popup-close"
                     loading="lazy"
                     onClick={()=>setPanel(false)}
                   />

                   <div class="home-product-card-overlay-text">
                     <div class="home-product-card-overlay-text-h1">
                       ISO PANEL
                     </div>
                     <div class="home-product-card-overlay-text-p">
                       In the dynamic landscape of modern construction,
                       efficiency and performance are paramount. ISO panels,
                       renowned for their exceptional insulation properties,
                       have revolutionized the industry by offering a
                       versatile solution for various building applications.
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            )
            }
           </div>

           <div class="home-products-card">
             <img
               src="./roofpanel.jpg"
               alt="ISO Panel"
               class="home-products-image"
             />
             <div class="home-products-content">
               <img
                 src="./Our Product rectangle.png"
                 alt="products-text-back-ground"
                 class="home-products-card-bg-img"
               />
               <div class="home-products-text">
                 <div class="home-products-card-h1">Iso Panel Roof</div>
                 <div class="home-products-plus-icon">
                   <img
                     src="./plus.png"
                     class="plus-icon"
                     alt="plus-icon"
                     loading="lazy"
                     id="plus-icon2"
                     onClick={()=>setRoof(true)}
                   />
                 </div>
               </div>
             </div>
            {roof && (
             <div id="overlay-content2">
               <div class="home-product-card-overlay">
                 <div class="home-product-card-overlay-content">
                   <img
                     src="./close.png"
                     alt="close-icon"
                     class="close-popup-icon"
                     id="popup-close2"
                     loading="lazy"
                     onClick={()=>setRoof(false)}
                   />

                   <div class="home-product-card-overlay-text">
                     <div class="home-product-card-overlay-text-h1">
                       ISO PANEL
                     </div>
                     <div class="home-product-card-overlay-text-p">
                       In the dynamic landscape of modern construction,
                       efficiency and performance are paramount. ISO panels,
                       renowned for their exceptional insulation properties,
                       have revolutionized the industry by offering a
                       versatile solution for various building applications.
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            )
            }
           </div>

           <div class="home-products-card">
             <img
               src="./wallpanel.jpg"
               alt="ISO Panel"
               class="home-products-image"
             />
             <div class="home-products-content">
               <img
                 src="./Our Product rectangle.png"
                 alt="products-text-back-ground"
                 class="home-products-card-bg-img"
               />
               <div class="home-products-text">
                 <div class="home-products-card-h1">Wall Panel</div>
                 <div 
                   class="home-products-plus-icon"
                   onClick={()=>setWall(true)}
                   >
                   <img
                     src="/plus.png"
                     class="plus-icon"
                     alt="plus-icon"
                     loading="lazy"
                     id="plus-icon3"
                   />
                 </div>
               </div>
             </div>

            {wall &&(
             <div id="overlay-content3">
               <div class="home-product-card-overlay">
                 <div class="home-product-card-overlay-content">
                   <img
                     src="./close.png"
                     alt="close-icon"
                     class="close-popup-icon"
                     id="popup-close3"
                     loading="lazy"
                     onClick={()=>setWall(false)}
                   />

                   <div class="home-product-card-overlay-text">
                     <div class="home-product-card-overlay-text-h1">
                       ISO PANEL
                     </div>
                     <div class="home-product-card-overlay-text-p">
                       In the dynamic landscape of modern construction,
                       efficiency and performance are paramount. ISO panels,
                       renowned for their exceptional insulation properties,
                       have revolutionized the industry by offering a
                       versatile solution for various building applications.
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            )}
           </div>
         </div>
       </div>

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
               <a href="/Contact"> Contact Us For Free Consultation </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </section>
  )
}

export default HomePage
