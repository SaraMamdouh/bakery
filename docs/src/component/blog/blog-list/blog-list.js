import React,{Component} from 'react';
import './style.css';
import axios from 'axios';
import Navbar from './../../navbar/navbar';
import Footer from './../../footer/footer';

class BlogList extends Component{
    state = {
        blog:[]
      }
      componentDidMount=()=>{
        axios.get('js/data.json').then(res=>{this.setState({blog:res.data.blog})})
      }
 render(){
    const {blog}=this.state;
    const blogList = blog.map ((blogedes) => {
        return(
            <div className="col-10">
            <span className="blog-new">News</span>
            <time class="time-right" datetime="2020-09-08">August 9, 2020</time>
            <div className="blog-content">
        <h2 className="news-title"><a href="#">{blogedes.title}</a></h2>
           <div className="figure">
            <img src={blogedes.image}/>
            </div>
            </div>
        <p className="blog-description">{blogedes.content}</p>
            <a href="#" className="blog-link">Read more</a>
            </div>
        )
        })
return(
<div className="blog-list">
<div className="gallery">
            <Navbar/>
            <div className="gallery-header">
            <h2 className="gallery-heading">blog list</h2>
            </div>
            <div className="blog-list-content">
            <div className="container">
            <div className="row">
            <div className="col-lg-8 col-xl-9">
            <div className="row">
            {blogList}
            </div>
            </div>
            <div className="col-lg-4 col-xl-3">
            <div className="row">
            <div className="col-12">
            <div className="cheif-identify">
            <img  className="cheif-image" src="/images/images/blog/user-4-123x123.jpg"/>
            <h5 className="header-5"><a href="#">CAROLINE LOPEZ</a></h5>
            <p className="cheif-description">Quis risus sed vulputate odio ut maecenas.</p>
            </div>
            </div>
           <div className="col-12">
            <div className="form-wrap">
             <input className="form-control" placeholder="Search blog..."/>
            <i class="fas fa-search"></i>
           </div>
           </div>
            <div className="col-12">
            <h6 className="blog-header">categories</h6>
            <ul className="list-categories">
            <li>
            <a href="#" >All</a>
            <span className="count">(18)</span>
            </li>
            <li>
            <a href="#" >Cakes</a>
            <span className="count">(9)</span>
            </li>
            <li>
            <a href="#" >Backing</a>
            <span className="count">(5)</span>
            </li>
            <li>
            <a href="#" >Recipes</a>
            <span className="count">(8)</span>
            </li>
            </ul>
            </div>
    
           <div className="col-12">
           <h6 className="blog-header">latest posts</h6>
           <div className="mini-posts">
            <div className="mini-left">
            <img className="post-image" src="/images/images/blog/post-mini-1-106x104.jpg"/>
            </div>
            <div className="mini-right">
            <p className="post-title"><a href="#">10 Easiest Ways to Decorate a Cake</a></p> 
            <time className="post-time" datetime="2020-03-15">March 15, 2020</time>
           </div>
           </div>  
           <div className="mini-posts">
            <div className="mini-left">
            <img className="post-image" src="/images/images/blog/post-mini-2-106x104.jpg"/>
            </div>
            <div className="mini-right">
            <p className="post-title"><a href="#">10 Tips for Baking Your First Cake</a></p> 
            <time className="post-time" datetime="2020-03-15">March 15, 2020</time>
           </div>
           </div>  
           </div>
           <div className="col-12">
            <h6 className="blog-header">popular tags</h6>
            <ul className="list-tags">
            <li><a href="#" >news</a></li>
            <li><a href="#" >blog</a></li>
            <li><a href="#" >Backing</a></li>
            <li><a href="#" >cakes</a></li>
            <li><a href="#" >tips</a></li>
            <li><a href="#" >Recipes</a></li>
            </ul>
            </div>
            <div className="col-12">
            <h6 className="blog-header">archive</h6>
            <ul className="list-archive">
            <li><a href="#" >March 2020</a></li>
            <li><a href="#" >February 2020</a></li>
            <li><a href="#" >January 2020</a></li>
            <li><a href="#" >December 2020</a></li>
            </ul>
            </div>
            </div>
            </div>

            </div> 
            </div>
            <Footer/>
            </div>
</div>
</div>

    
)}} 
export default BlogList;