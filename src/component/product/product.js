import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import './../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import ScrollAnimation from 'react-animate-on-scroll';
import'./style.css';


const Product =() =>{
  return(
  <div className="product">
  <div className="container">
    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
    <h2 className="heading-1">new products</h2>
    </ScrollAnimation>
    <OwlCarousel  className="owl-theme" margin={30} items="4" loop >
      <div className="item">
      <div className="figure">
      <span className="sale">sale</span>
      <img src="/images/product/product-1-152x160.png"/>
      </div>
      <div className="image-caption">
      <h5 className="title">Chocolate Truffles</h5>
      <p className="old-price">$30.00</p>
        <p className="price">$23.00</p>
       
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
      <img src="/images/product/product-2-157x127.png"/>
      </div>
      <div className="image-caption">
        <h5 className="title">Chocolate Pudding</h5>
        <p className="price">$25.00</p>
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
        <span className="new">new</span>
      <img src="/images/product/product-3-179x114.png"/>
      </div>
      <div className="image-caption">
        <h5 className="title">Dark Chocolate Cake</h5>
        <p className="price">$15.00</p>
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
      <img src="/images/product/product-4-215x112.png"/>
      </div>
      <div className="image-caption">
        <h5 className="title">Chocolate Cookies</h5>
        <p className="price">$12.00</p>
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
      <span className="sale">sale</span>
      <img src="/images/product/product-1-152x160.png"/>
      </div>
      <div className="image-caption">
      <h5 className="title">Chocolate Truffles</h5>
      <p className="old-price">$30.00</p>
        <p className="price">$23.00</p>
       
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
      <img src="/images/product/product-2-157x127.png"/>
      </div>
      <div className="image-caption">
        <h5 className="title">Chocolate Pudding</h5>
        <p className="price">$25.00</p>
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
        <span className="new">new</span>
      <img src="/images/product/product-3-179x114.png"/>
      </div>
      <div className="image-caption">
        <h5 className="title">Dark Chocolate Cake</h5>
        <p className="price">$15.00</p>
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
      <div className="item">
      <div className="figure">
      <img src="/images/product/product-4-215x112.png"/>
      </div>
      <div className="image-caption">
        <h5 className="title">Chocolate Cookies</h5>
        <p className="price">$12.00</p>
      </div>
      <div className="hidden-item">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
      </div>
    </OwlCarousel>
    </div>
  </div>
    
    )
 
  
}

export default Product;
