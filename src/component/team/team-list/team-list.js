import React from 'react';
import Team from './../team';
import Navbar from './../../navbar/navbar';
import Footer from './../../footer/footer';
import './style.css';

const TeamList = () =>{

    return(
        <div className="team-list">
        <div className="gallery">
<Navbar/>
<div className="gallery-header">
<h2 className="gallery-heading">our team</h2>
</div>
</div>
<Team/>
<Footer/>
        </div>
    
    )}

export default TeamList;