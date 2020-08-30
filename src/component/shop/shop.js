import React, { Component } from 'react';
import Navbar from './../navbar/navbar';
import axios from 'axios';
import './style.css';



class Shop extends Component{
    state={
        minValue:66,
        maxValue:635,
        shop:[]

    }
    componentDidMount=()=>{
        axios.get('js/data.json').then(res=>{this.setState({shop:res.data.shop})})
      }

    left=()=>{
        var inputLeft = document.getElementById("input-left");
        var inputRight = document.getElementById("input-right");
        var thumbLeft = document.querySelector(".slider > .thumb.left");
        var range = document.querySelector(".slider > .range");
        var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    this.setState({
        minValue:_this.value
    })
    }

    right=()=>{
        var inputLeft = document.getElementById("input-left");
        var inputRight = document.getElementById("input-right");
        var thumbRight = document.querySelector(".slider > .thumb.right");
        var range = document.querySelector(".slider > .range");
        var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    this.setState({
        maxValue:_this.value
    })
    }
    Change =()=>{
     document.querySelector(".select_wrap").classList.toggle("active");
    }
   ChangeLabel(e){
    var elem=e.target.innerHTML;
    var l=document.querySelector(".default_option li");
    l.innerHTML=elem;
    document.querySelector(".select_wrap").classList.remove("active");
}


    render(){
            const {shop}=this.state;
            const shopList=shop.map((shopdes)=>{
                return(
                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                    <div className="shop-content">
                    <div className="shop-figure">
                    <img src={shopdes.image}/>
                    </div>
                    <div className="shop-caption">
                    <h5><a href="#">{shopdes.title}</a></h5>
                    <p className="price">{shopdes.price}</p>
                    </div>
                    <div className="hidden-item">
                    <i class="fas fa-search"></i>
                    <i class="fas fa-shopping-cart"></i>
                    </div>
                    </div>
                    </div>
                )
            })
    return (
        <div className="shop">
               <div className="gallery">
            <Navbar/>
            <div className="gallery-header">
            <h2 className="gallery-heading">shop list </h2>
            </div>
          <div className="blog-list">
           <div className="container">
            <div className="row ">
            <div className="col-lg-4 col-xl-3">
            <div className="row row-cols-1">
            <div className="col">
            <h6 className="blog-header">filter by price</h6>
            <div className="slide-container">
            <div class="multi-range-slider">
		<input type="range" id="input-left" min="0" max="999" value={this.state.minValue} onInput={this.left}/>
		<input type="range" id="input-right" min="0" max="999" value={this.state.maxValue} onInput={this.right}/>
		<div class="slider">
			<div class="track"></div>
			<div class="range"></div>
			<div class="thumb left" ></div>
			<div class="thumb right"></div>
		</div>
    <button className="filter-button">filter</button>
    <p className="range-value">Price: <span>{"$"+this.state.minValue} </span> - <span>{"$"+this.state.maxValue}</span></p>

            </div>
            </div>
           </div>
            <div className="col">
            <h6 className="blog-header">categories</h6>
            <ul className="list-categories">
            <li>
            <input type="checkbox" className="check-input"/>
            <a href="#" >All</a>
            <span className="count">(18)</span>
            </li>
            <li>
            <input type="checkbox" className="check-input"/>
            <a href="#" >Cakes</a>
            <span className="count">(9)</span>
            </li>
            <li>
            <input type="checkbox" className="check-input"/>
            <a href="#" >Backing</a>
            <span className="count">(5)</span>
            </li>
            <li>
            <input type="checkbox" className="check-input"/>
            <a href="#" >Recipes</a>
            <span className="count">(8)</span>
            </li>
            </ul>
            </div>
            <div className="col">
            <input type="text" className="search-input" placeholder="Search in shop ..."/>
            <i className="fas fa-search"></i>
            </div>
            <div className="col">
            <h6 className="blog-header">popular products</h6>
           <div className="mini-posts">
            <div className="mini-left">
            <img className="post-image" src="/images/product-mini-1-106x104.png"/>
            </div>
            <div className="mini-right">
            <p className="post-title"><a href="#">Chocolate Pudding</a></p> 
            <p className="shop-price">$25.00</p>
           </div>
           </div>  
           <div className="mini-posts">
            <div className="mini-left">
            <img className="post-image" src="/images/product-mini-2-106x104.png"/>
            </div>
            <div className="mini-right">
            <p className="post-title"><a href="#">Truffles</a></p> 
            <p className="shop-price">$23.00</p>
           </div>
           </div>  
           <div className="mini-posts">
            <div className="mini-left">
            <img className="post-image" src="/images/product-mini-3-106x104.png"/>
            </div>
            <div className="mini-right">
            <p className="post-title"><a href="#">Chocolate Cake</a></p> 
            <p className="shop-price">$15.00</p>
           </div>
           </div>  
           </div>

</div>
            </div>
            <div className="col-lg-8 col-xl-9">
            <div className="page-header">
            <span className="unit-left">Showing 1–9 of 28 results</span>
            <div className="unit-right">
            <div className="select_wrap">
      <ul className="default_option" onClick={this.Change}>
          <li>
              <div>Sort by newsness</div>
              </li>
              </ul>
      <ul className="select_ul">
      <li onClick={this.ChangeLabel}>
            <div className="option">
            sort by newsness
            </div>
            </li>
            <li onClick={this.ChangeLabel}>
            <div className="option">
            Sort by popularity
            </div>
             </li>
             <li onClick={this.ChangeLabel}>
            <div className="option">
            Sort by alphabet
            </div>
             </li>
      </ul>
  </div>
  <i className="fas fa-th"></i>
      <i className="fas fa-list"></i>
            </div>
            </div>
           <div className="row row-30 row-lg-50 ">
            {shopList}
           </div>
            </div>
           </div>
            </div>
            </div>
        </div>
        </div>
    )
}
}
export default Shop;