

'use client'
import {useState} from 'react'; 
import Link from 'next/link'; 


// import React from 'react '
import c2 from '../../Styles/Card2.module.css'; 

// import c2 from '../Styles/Card2.module.css'; 


function Card2() {
  return (
    <div id={c2.mainContainer} >
    <Link href='/ProductPage2' alt="alt">
    
    <div id={c2.subContainer}>
    
    <div id={c2.cardContainer} >
    
    <div id={c2.imageContainer} >
    
    <div id={c2.image} >
    
    {/* Add in the image here  */}
    
    <img id={c2.img}  src='../assets/Ford.jpg' alt='alt'/>
    
    

    
    </div>
        
        
    </div>
    
    <div id={c2.priceContainer} >
    
    <div id={c2.price} >
    $4500
        
    </div>
    
    

    </div>
    
    <div id={c2.titleContainer} >
    
    <div id={c2.title} >
    Ford
    

    </div>

    
    </div>
    
    </div>

    
    </div>
    
    
    
    
    </Link>
    
    </div>
  );
  
}

export default Card2