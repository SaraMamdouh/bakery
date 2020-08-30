import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

const Blog = () =>{
return (
<div className="blog">
<div className="container">
<ScrollAnimation animateIn="zoomIn" animateOnce="true">
<h2 className="heading-1"> latest news</h2>
</ScrollAnimation>
<div className="row">
<div className="col">
<div className="figure">
<img className="blog-image" src="/images/news/post-1-570x461.jpg"/>
</div>
<div className="caption">
<time className="time-left" dateTime="2020-09-08">August 9, 2020</time>
<h4 className="title">How to Pipe a Fluffy Frosting Border on a Cake</h4>
</div>
</div>
<div className="col">
<div className="row ">
<div className="col-sm">
<div className="figure-right">
<img className="blog-image" src="/images/news/post-2-270x215.jpg"/>
</div>
<div className="caption-right">
<time className="time-right" dateTime="2020-09-08">August 9, 2020</time>
<h4 className="title-right">Recipe of the Day: Pumpkin Spice Latte Cake</h4>
</div>
</div>
<div className="col-sm">
<div className="figure-right">
<img className="blog-image" src="/images/news/post-3-270x215.jpg"/>
</div>
<div className="caption-right">
<time  className="time-right" dateTime="2020-09-08">August 9, 2020</time>
<h4 className="title-right">Top 5 Tips for Successful Cake Baking</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)
}

export default  Blog;