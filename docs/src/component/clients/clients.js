import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import './../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import'./style.css';


const Client = () =>{
return (
<div className="client">
<div className="container">
<OwlCarousel  className="owl-theme" margin={30} loop items="5" >
    <div className="item">
    <a href="#"><img src="/images/clients/clients-1-120x112.png" /></a>
    </div>
    <div className="item">
    <a href="#"><img src="/images/clients/clients-2-105x118.png" /></a>
    </div>
    <div className="item">
    <a href="#"><img src="/images/clients/clients-3-111x98.png" /></a>
    </div>
    <div className="item">
    <a href="#"><img src="/images/clients/clients-4-122x92.png" /></a>
    </div>
    <div className="item">
    <a href="#"><img src="/images/clients/clients-5-111x111.png" /></a>
    </div>
    </OwlCarousel>
</div>
</div>
    
    )
}

export default Client;