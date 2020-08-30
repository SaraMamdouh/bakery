import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';
class Home extends Component{
  render(){
  return (
   <div className="heading">
     <div className="container">
   <ScrollAnimation animateIn="fadeInDown" animateOnce="true"> <span className="header-1">Delicious</span></ScrollAnimation>
   <ScrollAnimation animateIn="fadeInLeft"  animateOnce="true">
    <span className="line"></span>
   <h2 className="header-2">CAKES FOR YOU</h2></ScrollAnimation>
     <p className="paragraph">Sweet Bakery offers the best
cakes and sweets for you.</p>
<ScrollAnimation animateIn="fadeInUp" offset="70"  animateOnce="true">
<button className="btn btn-head">shop now</button>
</ScrollAnimation>
   </div>
   <div className="heading-2">
    <div className="container-fluid">
    <span className="header-3"> Only Fresh Cakes</span>
    <p className="paragraph-2">All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
   <button className="btn btn-arrow">
   <i class="fas fa-arrow-right"></i>
</button>
    </div>
   </div>
   </div>
 )
}
}
export default Home;
