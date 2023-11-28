import React from 'react'

import p from '../../Styles/ProductPage1.module.css'; 

function ProductPage1() {
  return (
    <div id={p.mainContainer} >
    
    <div id={p.subContainer} >
    
    <div id={p.textContainer} >
        
        <div id={p.textPrice} >

        $700 
        
        </div>
        <div id={p.textName} >
        Jaguar 
        
        </div>
        <div id={p.textMileage} >
            mileage 
        120,000
        
        </div>

        
    </div>
    

    </div>
        
    
    </div>
  )
}

export default ProductPage1 