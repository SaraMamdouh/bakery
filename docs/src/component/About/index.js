import React,{Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

const About= () => {
  
  return (
   <div className="about ">
    <ScrollAnimation animateIn="zoomIn" animateOnce="true" >
    <h2 className="heading-1">about us</h2>
    </ScrollAnimation>
   <div className="container">
    <div className="row">
      <div className="col-sm">
        <img src="/images/about/about-570x511.jpg"/>
      </div>
      <div className="col-sm">
<div className="tab-content" id="v-pills-tabContent">
  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <h4 className="header-4">PROVIDING QUALITY BAKED GOODS FOR ALL CUSTOMERS</h4>
    <p className="link-paragraph">Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.</p>
    <a className="tab-link" href="#">read more </a>
  </div>
  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
  <h4 className="header-4">ENSURING THE BEST ATMOSPHERE FOR EVERYONE</h4>
    <p className="link-paragraph">We see the most important part of our business in ensuring the happiness of our staff and the satisfaction of our clients by creating a welcoming and caring atmosphere.</p>
    <a className="tab-link" href="#">read more </a>
  </div>
  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
  <h4 className="header-4">SERVING ONLY THE FRESHEST BAKED GOODS FOR YOU</h4>
    <p className="link-paragraph">We aim to deliver the best baked goods for corporate events and individual celebrations, while also offering the best level of customer service in the United States.</p>
    <a className="tab-link" href="#">read more </a> 
  </div>
</div>

<div className="tab-wrap"  >
<ul className="nav nav-tabs">
  <li className="nav-item "> <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#v-pills-home" role="tab" aria-controls="nav-home" aria-selected="true">our mission</a></li> 
  <li className="nav-item"> <a className=" nav-link" id="nav-profile-tab" data-toggle="tab" href="#v-pills-profile" role="tab" aria-controls="nav-profile" aria-selected="false">our value</a></li> 
  <li className="nav-item">  <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#v-pills-messages" role="tab" aria-controls="nav-contact" aria-selected="false">our goals</a></li>
</ul>
</div>
      </div>
    </div>
     </div>
   </div>
  )
}
export default About;
