import React from 'react'
import './Home.css'


function Home1(props) {
    return ( 
    <div className='imagecom'>
        <img  className='img1' src={props.img} />
        <div className='foodname'>
        <h1 className='h2'>{props.foodName}</h1>
        <hr id='hr1' />
        <p className='p2'>{props.description}</p>
        <button id='foodbtn'>{props.Buynow}</button>
        </div>

    </div>
     

     );
}

export default Home1;