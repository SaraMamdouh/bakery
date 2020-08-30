import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import './style.css';

class  Footer extends Component {
  state = {
    image:[]
  }
  componentDidMount=()=>{
    axios.get('js/data.json').then(res=>{this.setState({image:res.data.footer})})
  }
  render(){
    const {image}=this.state;
  const imageList = image.map ((imagedes) => {
    return(
  <div className="col-4 col-sm-2 col-lg-4">
    <a class="thumbnail-minimal" href="images/grid-gallery-1-original.jpg" data-lightgallery="item">
    <img  width="130" height="130" src={imagedes.image}/>
</a>
    </div>
    )
  })
  return (
 <div className="footer">
<div className="container">
  <div className="row">
    <div className="col-md-10 col-lg-3 col-xl-4">
      <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
      <h4 className="footer-heading">Gallery</h4>
      <div className="row row-10 gutters-10" data-lightgallery="group">
      {imageList}
    </div>
    </ScrollAnimation>
  </div>
  <div className="col-sm-6 col-md-7 col-lg-5 ">
  <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
  <h4 className="footer-heading">quick links</h4>
<ul className="quick-links">
  <li ><a className="footer-link" href="#">about us </a></li>
  <li ><a className="footer-link" href="#">our team </a></li>
  <li ><a className="footer-link" href="#">shop </a></li>
  <li ><a className="footer-link" href="#">pricing </a></li>
  <li ><a className="footer-link" href="#">FAQ </a></li>
  <li ><a className="footer-link" href="#">contact us </a></li>
  <li ><a className="footer-link" href="#">What we offer </a></li>
  <li ><a className="footer-link" href="#">our blog </a></li>
  <li ><a className="footer-link" href="#">testimonial</a></li>
  <li ><a className="footer-link" href="#">backing school </a></li>
  <li ><a className="footer-link" href="#">our recipes </a></li>
</ul>
</ScrollAnimation>
</div>
<div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
<ScrollAnimation animateIn="fadeInRight" animateOnce="true">
<h4 className="footer-heading">get in touch</h4>
<ul className="contact-creative">
  <li className="location">
<i className="fas fa-map-marker-alt"></i>
    <a href="#">523 Sylvan Ave, 5th Floor
Mountain View, CA 94041 USA</a>
</li>
<li className="phone">
<i className="fas fa-phone-alt"></i>
<a href="#">+1 (844) 123 456 78</a></li>
<li className="email">
<i className="fas fa-envelope"></i>
<a href="#">info@demolink.org</a>
</li>
</ul>
 <ul className="social">
   <li className="facebook">  <i class="fab fa-facebook-f"></i></li>
   <li className="twitter"><i class="fab fa-twitter"></i></li>
   <li className="instagram"><i class="fab fa-instagram"></i></li>
   <li className="google-plus"><i class="fab fa-google-plus-g"></i></li>
   <li className="skype"><i class="fab fa-skype"></i></li>
   </ul>
 </ScrollAnimation>
  </div>
</div>
</div>
 <div className="footer-end">
   <p>© 2020. Sweet Bakery. All Rights Reserved.<a href="#"> Privacy Policy.</a></p>
 </div>
     </div>   
        )
}
}

export default Footer;
