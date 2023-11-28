
'use client'
import Image from 'next/image'
import Card from './Components/Card'; 
import Layout from './Components/Layout'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
     <div>
     
      {/* Add in the layout component here  */}
     <Layout/> 
     
     
     </div>
     
     
     
    </main>
  )
}
