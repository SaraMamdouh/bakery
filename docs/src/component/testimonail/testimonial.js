import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import './../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import './../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

const Testimonial = () =>{
    return(
    <div className="testimonial">
    <div className="container">
    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
    <h2 className="heading-1">testimonials</h2>
    </ScrollAnimation>
<OwlCarousel className="owl-theme" margin={30} loop items={2} dots>
<div className="item">
<div className="testimonial-body">
<i class="fas fa-quote-left"></i>
<p className="review">Thank you so much for the elegant cupcakes. They looked and tasted amazing. I’m recommending you to all my friends.</p>
<span className="testimonial-line"></span>
<div className="feedback">
    <img className="client-image" src="/images/testimeniol/user-10-62x62.jpg"/>
    <h5 className="client-name">Patrick Goodman</h5>
    <span className="job">client</span>
</div>
</div>
</div>
<div className="item">
<div className="testimonial-body">
<i class="fas fa-quote-left"></i>
<p className="review">Just a note to let you know how fabulous your wedding cake was. Many guests commented on how delicious it tasted.</p>
<span className="testimonial-line"></span>
<div className="feedback">
    <img className="client-image" src="/images/testimeniol/user-11-62x62.jpg"/>
    <h5 className="client-name">Jane Smith</h5>
    <span className="job">client</span>
</div>
</div>
</div>
<div className="item">
<div className="testimonial-body">
<i class="fas fa-quote-left"></i>
<p className="review">If you are looking for the mouth deliciousness, then you should definitely try the goods from the Sweet Bakery.</p>
<span className="testimonial-line"></span>
<div className="feedback">
    <img className="client-image" src="/images/testimeniol/user-5-62x62.jpg"/>
    <h5 className="client-name">Sam Wilson</h5>
    <span className="job">client</span>
</div>
</div>
</div>
</OwlCarousel>
    </div>
    </div>
    
    )}

export default Testimonial;