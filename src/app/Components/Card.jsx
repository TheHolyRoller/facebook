
'use client'
import React from 'react'
import c from '../Styles/Card.module.css'; 

function Card() {
  return (
    <div id={c.mainContainer} >
    
    <div id={c.subContainer}>
    
    <div id={c.cardContainer} >
    
    <div id={c.imageContainer} >
    
    <div id={c.image} >
    
    {/* Add in the image here  */}
    
    <img id={c.img}  src='../assets/Ford.jpg' alt='alt'/>
    
    

    
    </div>
        
        
    </div>
    
    <div id={c.priceContainer} >
    
    <div id={c.price} >
    $7000
        
    </div>
    
    

    </div>
    
    <div id={c.titleContainer} >
    
    <div id={c.title} >
    Ford
    

    </div>

    
    </div>
    
    </div>

    
    </div>
    
    
    
    
    
    </div>
  );
  
}

export default Card