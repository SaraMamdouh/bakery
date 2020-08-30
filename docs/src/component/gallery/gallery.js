import React, { Component } from'react';
import Navbar from './../navbar/navbar';
import Footer from './../footer/footer';
import axios from 'axios';
import './style.css';

class Gallery extends Component{
    state = {
        image:[]
      }
      componentDidMount=()=>{
        axios.get('js/data.json').then(res=>{this.setState({image:res.data.gallery})})
      }
    render(){
        const {image}=this.state;
        const imageList = image.map ((imagedes) => {
          return(
        <div className="col">
          <img src={imagedes.image} width="370" height="315"/>
          <div className="gallery-details">
        <div className="gallery-caption">
          <h5 className="cake-name">{imagedes.name}</h5>
          <span className="cake-price">{imagedes.price}</span>
          <div className="cake-icon">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      </div>
          </div>
          </div>
          </div>
          )
        })
    return (
        <div className="gallery">
            <Navbar/>
            <div className="gallery-header">
            <h2 className="gallery-heading">grid gallery</h2>
            </div>
        <div className="container-fluid">
        <div className="gallery-categories">
        <ul className="gallery-list">
        <li><a className="gallery-link active-link" href="#">all categories</a></li>
        <li><a className="gallery-link" href="#">cakes</a></li>
        <li><a className="gallery-link" href="#">cup cakes</a></li>
        </ul>
        </div>
        <div className="row">
{imageList}
        </div>
        </div>
       <Footer/>
        </div>
    )
}
}
export default Gallery;