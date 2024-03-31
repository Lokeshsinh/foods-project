import React from 'react'
import './Home.css'
import Home1 from './Home1';


function Home() {
    return (
        <section>

            <div className='image' style={{backgroundColor:"black"}}>
                <div className='food'>
                <h1 id='h1'>Order your best  food anytime!</h1>
                <p id='p1'>Hey, our delicious food is waiting for you, we are always near to you with fresh item of food. </p>
                </div>
                <button className='explore'>Explore food</button>

               
            </div>
            <div className='food1'>
               <Home1 
               img = "https://images.unsplash.com/photo-1674938556574-78abfb2d9fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlY2lhbCUyMCUyMCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
               foodName ="Special burger"
               description = "Every burger chain or home cook probably makes special sauce a little differently. But at the end of the day."
               Buynow = "Order Now"
              
               />
                <Home1 
               img = "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               foodName ="Italian Pizza"
               description = "Every pizza to change the mood and  you can eat its our shop to get italian pizza. But at the end of the day."
               Buynow = "Order Now"
               />
                <Home1 
               img = "https://images.unsplash.com/photo-1622020367723-04057acd56b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               foodName ="Chicken  Sandwich"
               description = "Every sandwich chain or home cook probably makes special sauce a little differently. But at the end of the day."
               Buynow = "Order Now"
               />
                <Home1 
               img = "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3NoYWtlfGVufDB8fDB8fHww"
               foodName ="Chocolate milkshake"
               description = "Every milkshake its very taste and its drink to happy this is every person to drink. But at the end of the day."
               Buynow = "Order Now"
               />
               
            </div>
            </section>
            
         
     );
}

export default Home;