import React from 'react'
import './Dish.css'
function Dish(dish) {

    return ( 
       <div className='dish1' style={{border:"1px solid black", width:"20%",backgroundColor:"white",}} >
        <img  className= "img2" src={dish.image} alt='dish' />
        <div className='dish2'style={{height:"15px"}} >
            <div className='dish3'>
                <h3 style={{marginLeft:"10px"}}>{dish.foodName}</h3>
                <h3  style={{marginRight:"10px",color:"#9C6644"}}>{dish.price}</h3>
                </div>
                <hr id='hr4'/>
                <p id='p10'>{dish.description}</p>
                <button id='btn6'>{dish.BuyNow}</button>
                

           

        </div>

       </div>

     );
}

export default Dish;