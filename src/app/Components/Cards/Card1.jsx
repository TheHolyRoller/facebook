
'use client'
import React from 'react'
import c1 from '../../Styles/Card1.module.css'; 
import Link from 'next/link'; 


function Card1() {
  return (
    <div id={c1.mainContainer} >
    <Link href="/ProductPage1" alt="alt">
    

    
    <div id={c1.subContainer}>
    
    <div id={c1.cardContainer} >
    
    <div id={c1.imageContainer} >
    
    <div id={c1.image} >
    
    {/* Add in the image here  */}
    
    <img id={c1.img}  src='../assets/Ford.jpg' alt='alt'/>
    
    

    
    </div>
        
        
    </div>
    
    <div id={c1.priceContainer} >
    
    <div id={c1.price} >
    $7000
        
    </div>
    
    

    </div>
    
    <div id={c1.titleContainer} >
    
    <div id={c1.title} >
    Ford
    

    </div>

    
    </div>
    
    </div>

    
    </div>
    
    </Link> 
    
    
    </div>
  );
  
}

export default Card1