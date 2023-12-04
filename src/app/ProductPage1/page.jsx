'use client'
import React from 'react'

import p from '../Styles/ProductPage1.module.css'; 

// import p from '../../Styles/ProductPage1.module.css'; 

function ProductPage1() {
  return (
    <div id={p.mainContainer} >
    
    <div id={p.subContainer} >
    
    <div id={p.textContainer} >
    
        
        <div id={p.textPrice} >

        $7000 
        
        </div>
        <div id={p.textName} >
        Jaguar 
        
        </div>
        <div id={p.textMileage} >
            Driven 
        120,000
        
        </div>


        
    </div>
    

    </div>
        
    
    </div>
  )
}

export default ProductPage1 