import React , {Component} from 'react';
import Footer from './../footer/footer';
import Navbar from './../navbar/navbar';
import OfferList from './../offer/offer-list/offer-list';
import MapContainer from './../googleMap';
import axios from 'axios';
import'./style.css';


class  Contact extends Component{
  state = {
    contact:[]
  }
  componentDidMount=()=>{
    axios.get('js/data.json').then(res=>{this.setState({contact:res.data.contact})})
  }
  render(){
    const {contact}=this.state;
    const contactList = contact.map ((contactdes) => {
      return(
        <div className="col" >
        <label  className="offer-label" onClick={this.props.remove} >{contactdes.label}</label>
      <label  className="error-label">the text field is required </label>
      <input className=" form-control offer-input"  onFocus={this.props.remove} onBlur={this.props.check}/>
        </div>
         )})
  return (
  <div className="contact" id="Contact">
 <div className="gallery">
            <Navbar/>
 <div className="gallery-header">
            <h2 className="gallery-heading">contact us</h2>
            </div>
<div className="contact-header">
<div className="container">
<h3 className="unit-header">get in touch </h3>
<p className="contact-paragraph">We are available 24/7 by fax, e-mail or by phone. You can also use our
quick contact form to ask a question about our products.</p>
</div>
</div>
  <form className="form-group">
  <div className=" row">
  <div className="col-lg-8">
  <div className="row row-cols-2">
    {contactList}
  </div>
  </div>
  <div className="col-lg-4">
  <label  className="offer-label" onClick={this.props.remove} >Message</label>
  <label  className="error-label error-message">the text field is required </label>
    <textarea className="form-control Message-area" rows="4" onFocus={this.props.remove} onBlur={this.props.check}/>
  </div>
  </div>
  <button className="contact-button">send message</button>
  </form>
  <div className="contact-details">
<div className="container">
  <div className="row">
    <div className="col">
      <h5 className="datails-header">phones</h5>
      <span className="details-span">Office
      <a href="#">+1 (409) 987–5874</a></span>
      <span className="details-span">Fax
      <a href="#">+1 (409) 987–5874</a></span>
    </div>
  <div className="col">
  <h5 className="datails-header">address</h5>
<span className="details-span"><a href="#">523 Sylvan Ave, 5th Floor</a>
 </span>
 <span className="details-span"><a href="#">Mountain View, CA 94041 USA</a>
 </span>
  </div>
 <div className="col">
 <h5 className="datails-header">e-mail</h5>
<span className="details-span"><a href="#">info@demolink.org</a></span>
<span className="details-span"><a href="#">mail@demolink.org</a></span>
 </div>
  </div>
</div>
  </div>
 <div className="google-map">
<MapContainer/>
 </div>
  </div>
<div className="contact-footer">
<Footer/>
</div>
</div>
  )
}
}
export default Contact;
