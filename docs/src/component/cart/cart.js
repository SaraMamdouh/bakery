import React, { Component } from 'react';
import Navbar from './../navbar/navbar';
import Footer from './../footer/footer';
import axios from 'axios';
import './style.css';

class Cart extends Component{
    state={
        cart:[],
        total:48
    }
    componentDidMount=()=>{
        axios.get('js/data.json').then(res=>{this.setState({cart:res.data.cart})})
      }

      handleIncreament=(index)=>{
       const count =this.state.cart.map((c)=>{
         if(c.id===index){
         c.quantity++;
         c.total=c.quantity*c.price;
        this.setState({
          total:this.state.total+c.price

        })}
      })
          }
          handleDecreament=(index)=>{
            const count =this.state.cart.map((c)=>{
              if(c.id===index && c.quantity>0){
              c.quantity--;
              c.total=c.quantity*c.price;
             this.setState({
              total:this.state.total-c.price
             })
             }
           })
               }
    render(){
        const {cart}=this.state;
        const cartList = cart.map ((cartdes) => {
          return(
            <tr>
            <td>
            <div className="cart-content">
            <img src={cartdes.image}/>
           <h4>{cartdes.title}</h4>
            </div>
            </td>
            <td>
            {"$ "+ cartdes.price + ".00"}
            </td>
            <td>
            <div className="cart-quantity">
            <button className="quantity-button" onClick={()=>this.handleDecreament(cartdes.id)}>-</button>
          <span className="quantity">{cartdes.quantity}</span>
            <button className="quantity-button" onClick={()=>this.handleIncreament(cartdes.id)}>+</button>
            </div>
            </td>
            <td>{"$"+cartdes.total+".00"}</td>
            </tr>
          )
        })
        return(
            <div className="cart">
            <div className="gallery">
            <Navbar/>
             <div className="gallery-header">
            <h2 className="gallery-heading">cart page</h2>
            </div>
            <div className="container">
            <table>
            <thead>
            <tr>
            <th>product name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            </tr>
            </thead>
            <tbody>
            {cartList}
            </tbody>
            </table>
            <div className="cart-bottom">
            <input className="cart-input" placeholder="Coupon code"/>  
            <button className="cart-button">apply</button>
            <div className="check-out">
        <span className="total-span">total</span>
        <span className="price-span">{"$"+this.state.total}</span>
        <button className="cart-button check-out-button">proceed to checkout</button>

            </div>
            </div> 
            </div>
          <Footer/>
            </div>
            </div>
        )
    }
} 

export default Cart;