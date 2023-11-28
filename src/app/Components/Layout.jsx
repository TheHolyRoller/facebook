'use client'

import React from 'react'
import l from '../Styles/Layout.module.css'; 
import Card1 from '../Components/Cards/Card1'; 
import Card2 from '../Components/Cards/Card2'; 
import Card3 from '../Components/Cards/Card3'; 

function Layout() {
  return (
  
    
    <div id={l.mainContainer} >
    
    <div id={l.subContainer} >
    
    <div id={l.gridContainer} >
    
    <div id={l.grid} >
    
    {/* Add in the grid items here  */}
    <div id={l.gridItem} >
    
    <Card1/> 
    </div>
    <div id={l.gridItem} >
    
    <Card2/> 
    </div>
    <div id={l.gridItem} >
    
    <Card3/> 
    </div>
    
    

    
    </div>
    
    
    
    </div>
    

    </div>
    
    
    
    </div>
  )
}

export default Layout
