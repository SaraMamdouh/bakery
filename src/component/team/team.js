import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import './../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import './../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

const  Team = () => {
  return (
    <div className="team">
      <div className="container">
      <ScrollAnimation animateIn="zoomIn" animateOnce="true">
        <h2 className="heading-1">our team</h2>
        </ScrollAnimation>
         <OwlCarousel  className="owl-theme" margin={40} items="3" >
      <div className="item">
      <div className="team-header">
        <a href="#" className="team-figure">
    <img className="team-image"  src="/images/team/team-1-249x249.jpg"/></a>
    <div className="decor"></div>
    </div>
    <div className="team-body">
    <h4 className="name">richard smith</h4>
    <p className="description">Richard has a true passion for baking and that’s why he has been our founder and head baker since day one.</p>
    <div className="social">
    <i class="fab fa-facebook-f"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-google-plus-g"></i>
    </div>
    </div>
    </div>
    <div className="item">
    <div className="team-header">
    <a href="#" className="team-figure">
    <img className="team-image" src="/images/team/team-2-249x249.jpg"/></a>
    <div className="decor"></div></div>
    <div className="team-body">
    <h4 className="name">Susan Anderson</h4>
    <p className="description">Susan spends most of her time baking and cake decorating as well as heading up the bakery's marketing initiatives.</p>
    <div className="social">
    <i class="fab fa-facebook-f"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-google-plus-g"></i>
    </div>
    </div>
    </div>
    <div className="item">
    <div className="team-header">
    <a href="#" className="team-figure">
    <img className="team-image" src="/images/team/team-3-249x249.jpg"/></a>
    <div className="decor"></div></div>
    <div className="team-body">
    <h4 className="name">Steve Ruffalo</h4>
    <p className="description">Steve is our lead cake designer. He has designed beautiful cakes for various occasions including weddings, parties, showers, anniversaries and more.</p>
    <div className="social">
    <i class="fab fa-facebook-f"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-google-plus-g"></i>
    </div>
    </div>
    </div>
  </OwlCarousel>
  </div>
 <div className="team-end">
   <div className="container">
  <ScrollAnimation animateIn="fadeInDown" animateOnce="true">
  <h3 className="header-1">Unique Flavors and Fresh Ingredients</h3>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
  <h2 className="team-header2">All Kinds of Cakes</h2>
  </ScrollAnimation>
  <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
  <button className="btn btn-head">read more</button>
  </ScrollAnimation>
 </div>
 </div>
  </div>
  )
}

export default Team;
