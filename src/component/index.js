import React  from 'react';
import Home from './Home/Home';
import Navbar from './navbar/navbar';
import Offer from './offer/offer';
import Product from './product/product';
import Choose from './why choose us/choose';
import About from './About/index';
import Team from './team/team';
import Testimonial from './testimonail/testimonial';
import Blog from './blog/blog';
import Client from './clients/clients';
import Footer from'./footer/footer';
const Index =()=>{
    return(
<div>
<Navbar/>
<Home/>
<Offer/>
<Product/>
<Choose/>
<About/>
<Team/>
<Testimonial/>
<Blog/>
<Client/>
<Footer/>
</div>
    )
}
export default Index;