import React , {Component} from 'react';
import Index from './component/index';
import Contact from './component/contact/contact';
import Gallery from './component/gallery/gallery';
import BlogList from './component/blog/blog-list/blog-list';
import OfferList from './component/offer/offer-list/offer-list';
import PriceList from './component/pricing/pricing-list/pricing-list';
import TestimonialList from './component/testimonail/testimonial-list/testimonial-list';
import TeamList from './component/team/team-list/team-list';
import Shop from './component/shop/shop';
import Cart from './component/cart/cart';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends  Component {


remove=(e)=>{
var myElement=e.target.parentElement.querySelector(".offer-label");
myElement.style.opacity="0";
}
check=(e)=>{
    var elem=e.target;
    if (elem.value ===""){
        elem.style.borderColor="#f5543f";
        e.target.parentElement.querySelector(".error-label").style.opacity="1";
        e.target.parentElement.querySelector(".offer-label").style.opacity="1";
    }
    console.log(elem.value)

}
  render(){
    
  return(
    <BrowserRouter>
    <Index/>
    <Route path="/contact"  component={()=><Contact check={this.check} remove={this.remove}/>}></Route>
    <Route path="/gallery" component={Gallery}></Route>
    <Route path="/blog" component={BlogList}></Route>
    <Route path="/offer" component={()=><OfferList check={this.check} remove={this.remove} />}></Route>
    <Route path="/price" component={PriceList}></Route>
    <Route path="/testimonial" component={TestimonialList}></Route>
    <Route path="/team" component={TeamList}></Route>
    <Route path="/shop" component={Shop}></Route>
    <Route path="/cart" component={Cart}></Route>
    </BrowserRouter>
  )

  }
}

export default App;
