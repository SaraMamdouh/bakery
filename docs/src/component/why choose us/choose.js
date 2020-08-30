import React,{Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import'./style.css';
import axios from 'axios';
class Choose extends Component {
   render(){
  return (
     <div className="choose">
       <ScrollAnimation animateIn="zoomIn" animateOnce="true">
      <h1 className="heading-1">why choose us</h1>
      </ScrollAnimation>
      <div className="row">
        <div className="col">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
        <div className="choose-details">
        <h5 class="choose-heading">quality product</h5>
        <p className="choose-paragraph">We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
        <span className="choose-line"></span>
        </div>
        <div className="icon">
        <i class="fas fa-birthday-cake"></i>
        <svg class="svg-bg" width="77.06" height="71.94" viewBox="0 0 77.06 71.94">
        <path d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z" transform="translate(-1182.94 -3348.03)"></path>
        </svg>
        </div>
        </ScrollAnimation>
        </div>
        <div className="col-5">
          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
          <img className="choose-image" src="/images/offer/index-1-377x212.jpg"/>
          </ScrollAnimation>
        </div>
        <div className="col">
          <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
        <div className="icon-right">
        <i class="fas fa-cannabis"></i>
        <svg class="svg-bg" width="77.06" height="71.94" viewBox="0 0 77.06 71.94">
        <path d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z" transform="translate(-1182.94 -3348.03)"></path>
        </svg>
        </div>
        <div className="choose-details">
          <h5 class="choose-heading">catering service</h5>
        <p className="choose-paragraph">Our bakery also provides an outstanding catering service for events and special occasions.</p>
        <span className="choose-line"></span>
        </div>
        </ScrollAnimation>
         </div>
        </div>
         <div className="row">
        <div className="col">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" offset="70">
        <div className="choose-details">
        <h5 class="choose-heading">free delivery</h5>
        <p className="choose-paragraph">All orders submitted by our US clients are delivered for free throughout the United States.</p>
        </div>
        <div className="icon">
        <i class="fas fa-truck"></i>
        <svg class="svg-bg" width="77.06" height="71.94" viewBox="0 0 77.06 71.94">
        <path d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z" transform="translate(-1182.94 -3348.03)"></path>
        </svg>
        </div>
        </ScrollAnimation>
        </div>
        <div className="col-5"></div>
        <div className="col">
        <ScrollAnimation animateIn="fadeInRight" animateOnce="true" offset="70">
        <div className="icon-right">
        <i class="fas fa-money-check"></i>
        <svg class="svg-bg" width="77.06" height="71.94" viewBox="0 0 77.06 71.94">
        <path d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z" transform="translate(-1182.94 -3348.03)"></path>
        </svg>
        </div>
        <div className="choose-details">
          <h5 class="choose-heading">online payment</h5>
        <p className="choose-paragraph">We accept all kinds of online payments including Visa, MasterCard, American Express credit cards.</p>
        </div>
        </ScrollAnimation>
        </div>
         </div>
         <div>
         </div>
      <div className="choose-sale">
        <div className="choose-content">
        <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
      <h1 className="heading-1">summer sale</h1>
      </ScrollAnimation>
      <div className="discount">
      <ScrollAnimation animateIn="fadeInRight" animateOnce="true" delay="100">
      <span className="header-1">-20%</span>
      <span className="choose-span">on all cakes</span>
     </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInRight" animateOnce="true" delay="150">
      <p className="paragraph">Purchase our tasty cakes and sweets for your next event or family dinner at our online shop and save more money than anywhere.</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
      <button className="btn btn-head">shop now</button>
      </ScrollAnimation>
      </div>
      </div>
    </div>
  )
}
}
export default Choose;
