import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from './../../navbar/navbar';
import Footer from './../../footer/footer'
import Price from './../../pricing/price';
import './style.css';


const OfferList = (props) =>{
 return (
<div className="offer-page">
<div className="gallery">
<Navbar/>
<div className="gallery-header">
<h2 className="gallery-heading">what we offer</h2>
</div>

<div className="container">
<div className="row">
<div className="col">
    <span className="offer-number">01</span>
    <i class="fas fa-birthday-cake"></i>
    <h5 class="offer-heading">quality product</h5>
    <div className="offer-content">Pellentesque elit ullamcorper dignissim cras tincidunt lobortis etiam dignissim diam quis enim.</div>
</div>
<div className="col">
    <span className="offer-number">02</span>
    <i class="fas fa-cannabis"></i>
    <h5 class="offer-heading">catering service</h5>
    <div className="offer-content">Nullam non nisi est sit. Proin sed libero enim sed faucibus turpis aenean sed adipiscing diam.</div>
</div>
<div className="col">
    <span className="offer-number">03</span>
    <i class="fas fa-truck"></i>
    <h5 class="offer-heading">free delivery</h5>
    <div className="offer-content">Arcu cursus euismod quis viverra. Velit egestas dui id ornare arcu odio purus ut faucibus.</div>
</div>
<div className="col">
    <span className="offer-number">04</span>
    <i class="fas fa-money-check"></i>
    <h5 class="offer-heading">online payment</h5>
    <div className="offer-content">Consequat mauris nunc congue nisi vitae. Bibendum est ultricies integer quis auctor.</div>
</div>
</div>
</div>
<div className="stay-connected">
<div className="container">
<div className="row">
<div className="col-4">
<ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
<h3 className="stay-span">stay
<span className="connected-span">connected</span>
</h3>
<p className="stay-paragraph">Subscribe to our newsletter</p>
</ScrollAnimation>
</div>
<div className="col">
<label  className="offer-label" >Enter your e-mail address </label>
<label  className="error-label" >the text field is required </label>
<input className=" form-control offer-input" onFocus={props.remove} onBlur={props.check}/>
<button className="offer-button">subscribe</button>
</div>
</div>
</div>
</div>
<Price/>
<Footer/>
</div>
</div>
 )   
}

export default OfferList ; 