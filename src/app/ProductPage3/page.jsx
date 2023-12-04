
'use client'

import React from 'react'

import p3 from '../Styles/ProductPage2.module.css'; 

// import p3 from '../Styles/ProductPage1.module.css'
// import p2 from '../../Styles/ProductPage1.module.css'; 



function ProductPage3() {
  return (
    
    <div id={p3.subContainer} >
      
    
    <div id={p3.textContainer} >
    
    {/* Add in the link here  */}
    
        
        <div id={p3.textPrice} >
            
        $3000
        
        </div>
        <div id={p3.textName} >
        Jaguar 
        
        </div>
        <div id={p3.textMileage} >
            Driven 
        100,000
        
        </div>

        
    </div>
    

    </div>
        
    

  )
}

export default ProductPage3