import React, { Component } from 'react';
import axios from 'axios'
import './style.css';
import Navbar from './../../navbar/navbar';
import Footer from './../../footer/footer';

class TestimonialList extends Component{
state={
    testimonial:[]
}
componentDidMount=()=>{
    axios.get('js/data.json').then(res=>{this.setState({testimonial:res.data.testimonial})})
}
render(){
    const { testimonial}=this.state;
    const testimonialList =  testimonial.map ((testimonialdes) => {
        return(
            <div className="col">
            <div className="testimonial-body">
            <i class="fas fa-quote-left"></i>
            <p className="testimonial-review">{testimonialdes.paragraph}</p>
            <div className="testimnoial-feedback">
             <img className="client-image" src={testimonialdes.image}/>
            <h5 className="client-name">{testimonialdes.name}</h5>
             <span className="job">client</span>
            </div>
            </div>
            </div>
        )
      })
 return (
<div className="testimonial-list">
 <div className="gallery">
            <Navbar/>
    <div className="gallery-header">
            <h2 className="gallery-heading">testimonial</h2>
            </div>
<div className="testimonial-list-content">
<div className="container">
<div className="row">
{testimonialList}
</div>
</div>
</div>
           <Footer/>
            </div>
     </div>
 )   
}
}
export default TestimonialList;