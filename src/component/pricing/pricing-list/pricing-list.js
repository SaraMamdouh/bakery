import React from 'react';
import './style.css';
import Navbar from './../../navbar/navbar';
import Footer from './../../footer/footer';
import Price from './../price';

const PriceList = () =>{
    return (
        <div className="price-list "> 
        <div className="gallery">
<Navbar/>
<div className="gallery-header">
<h2 className="gallery-heading">pricing list</h2>
</div>

<div className="list-header">
<div className="list-body">
<h2 className="list-header-2">our pricing plan</h2>
<p className="list-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor Tur adipiscing elit, sed do. semantic;users, seamless beta-test</p>
</div>
</div>
<Price/>
<Footer/>
</div>
        </div>
    )
}
export default PriceList;