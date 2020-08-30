import React,{Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import './style.css';
class  Offer extends Component{
  state = {
    offer:[]
  }
  componentDidMount=()=>{
    axios.get('js/data.json').then(res=>{this.setState({offer:res.data.offer})})
  }
render(){
  const {offer}=this.state;
  const offerList = offer.map ((offerdes) => {
    return(
   <div className="col-sm" key={offerdes.id}>
    <ScrollAnimation animateIn="fadeInUp" animateOnce="true" delay={offerdes.id*100}>
    <img className="image" src={offerdes.image} />
    <h3 className="title">{offerdes.title}  </h3>
    <p className="offer-p">{offerdes.paragraph}  </p>
    <a className=" offerlink">read more</a>
    </ScrollAnimation>
    </div>
    )
  })
  return (
    <div className="offer">
      <ScrollAnimation animateIn="zoomIn"  animateOnce="true">
     <h1 className="heading-1">what we offer </h1>
     </ScrollAnimation>
     <div className="row">
     {offerList}
   </div>
 </div>
  )
}
}
export default Offer;
