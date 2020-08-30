import React , {Component} from 'react';
import './style.css';
import axios from 'axios';

class Price extends Component{
    render(){
        return(
            <div className="price">
            <div className="container">
            <div className="row">
            <div className="col">
            <div className="price-content">
            <div className="pricing-image">
            <img src="/images/pricing/pricing-1-346x229.jpg"/>
            <div className="pricing-body">
            <h2 className="pricing-header">cupcakes</h2>
            <span className="price-value">$90.00</span>
            </div>
            </div>
            <div className="product-category">
            <ul className="category-list">
            <li>classic</li>
            <li>gourmet</li> 
            <li>fondant</li>
            <li>gourmet/Fondant</li> 
            </ul>
           <button className="price-button button-animation">add to cart</button>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="price-content">
            <div className="pricing-image">
            <img src="/images/pricing/pricing-2-346x229.jpg"/>
            <div className="pricing-body">
            <h2 className="pricing-header">wedding cakes</h2>
            <span className="price-value old">$300.00</span>
            <span className="price-value">$120.00</span>
            <span className="new-icon">sale</span>
            </div>
            </div>
            <div className="product-category">
            <ul className="category-list">
            <li>Red Velvet Cake</li>
            <li>Chocolate Cake</li> 
            <li>Lemon Cake</li>
            <li>Pink Champagne Cake</li> 
            </ul>
           <button className="price-button button-animation">add to cart</button>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="price-content">
            <div className="pricing-image">
            <img src="/images/pricing/pricing-3-346x229.jpg"/>
            <div className="pricing-body">
            <h2 className="pricing-header">part cakes</h2>
            <span className="price-value">$100.00</span>
            </div>
            </div>
            <div className="product-category">
            <ul className="category-list">
            <li>Pineapple Cake</li>
            <li>Oreo Cheesecake</li> 
            <li>Mango Meringue Cake</li>
            <li>Fudgy Chocolate Cake</li> 
            </ul>
           <button className="price-button button-animation">add to cart</button>
            </div>
            </div>
            </div>
       </div>
            </div>
            </div>
        )
    }
}
export default Price;