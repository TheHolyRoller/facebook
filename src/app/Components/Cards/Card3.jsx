


'use client'
import React from 'react'
import c3 from '../../Styles/Card3.module.css'; 
import Link from 'next/link'; 



// import c3 from '../Styles/Card3.module.css'; 

function Card3() {
  return (
    <div id={c3.mainContainer} >
    <Link href="/ProductPage3">
    
    
    
    <div id={c3.subContainer}>
    
    
    <div id={c3.cardContainer} >
    
    <div id={c3.imageContainer} >
    
    <div id={c3.image} >
    
    {/* Add in the image here  */}
    
    <img id={c3.img}  src='../assets/Ford.jpg' alt='alt'/>
    
    

    
    </div>
        
        
    </div>
    
    <div id={c3.priceContainer} >
    
    <div id={c3.price} >
    $700
        
    </div>
    
    

    </div>
    
    <div id={c3.titleContainer} >
    
    <div id={c3.title} >
    Ford
    

    </div>

    
    </div>
    
    </div>

    
    </div>
    
    
    
    </Link>
    
    </div>
  );
  
}

export default Card3