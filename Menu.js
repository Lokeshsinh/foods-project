import{useState} from 'react'
import React from 'react'
import './Menu.css'
import Dish from './Dish';


const allDish =[
    {
        id: 1,
        foodName:"Burger",
        category :"lunch",
        price : "$5.88",
        img : "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc :"Cheese pizza would be the character that everyone likes, but doesn’t always appreciate."
    },
    {
        id: 2,
        foodName:"mutton",
        category :"dinner",
        price :"$ 6.88",
        img: "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXV0dG9ufGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat"
    },
    {
        id: 3,
        foodName : "chicken Burger",
        category : "lunch",
        price : " $ 5.58",
        img: "https://images.unsplash.com/photo-1637710847214-f91d99669e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
        BuyNow:"Order Now",
        desc :"Cheese pizza would be the character that everyone likes, but doesn’t always appreciate."


    },
    {
        id: 4,
        foodName : "Chicken roast",
        category : "dinner",
        price : " $ 6.58",
        img: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMHJvYXN0fGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat"
       


    },
    {
        id: 6,
        foodName : "Cheese Pizza",
        category : "lunch",
        price : " $ 5.58",
        img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHBpenphfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "Cheese pizza would be the character that everyone likes, but doesn’t always appreciate."
       


    },
    {
        id: 7,
        foodName : "Chicken Briyani",
        category : "dinner",
        price : " $ 10.58",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
        BuyNow:"Order Now",
        desc : "A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat."
        

    },
    {
        id: 8,
        foodName : "Mutton Briyani",
        category : "dinner",
        price : " $ 12.58",
        img: "https://images.unsplash.com/photo-1696265350630-efa107c33990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE11dHRvbiUyMEJpcml5YW5pfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat."
       
        

    },
    {
        id: 9,
        foodName : "Cheese Burger",
        category : "lunch",
        price : " $ 6.58",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "Cheese pizza would be the character that everyone likes, but doesn’t always appreciate."
      


    },
    {
        id: 10,
        foodName : "Chicken Pizza",
        category : "lunch",
        price : " $ 7.58",
        img: "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "Cheese pizza would be the character that everyone likes, but doest always appreciate."
    },
    {
        id: 11,
        foodName : "Chicken Sandwish",
        category : "breakfast",
        price : " $ 6.58",
        img: "https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "The United States contributed elaborate sandwich formulas, two of the most successful ."
    },
    {
        id: 12,
        foodName : "Salad",
        category : "breakfast",
        price : " $ 4.58",
        img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbGFkfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "The United States contributed elaborate sandwich formulas, two of the most successful ."

    },
    {
        id: 13,
        foodName : "Bread",
        category : "Breakfast",
        price : " $ 4.00",
        img: "https://images.unsplash.com/photo-1590301157172-7ba48dd1c2b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFkfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "The United States contributed elaborate sandwich formulas, two of the most successful ."
    },
    {
        id: 14,
        foodName : "Pasta",
        category : "breakfast",
        price : " $ 6.58",
        img: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
        BuyNow:"Order Now",
        desc : "The United States contributed elaborate sandwich formulas, two of the most successful ."
    },
    {
        id: 15,
        foodName : "Cheese Sandwish",
        category : "breakfast",
        price : " $ 10.58",
        img: "https://images.unsplash.com/photo-1608039858788-667850f129f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
        BuyNow:"Order Now",
        desc : "The United States contributed elaborate sandwich formulas, two of the most successful ."
    },
    {
        id: 16,
        foodName : "ChocolateShake",
        category : "milkshake",
        price : " $ 10.59",
        img: "https://images.unsplash.com/photo-1619158403521-ed9795026d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGslMjBzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        BuyNow:"Order Now",
        desc : "Blend the shake. In a blender, combine the milk and ice cream and blend until smooth."

    },
    {
        id: 17,
        foodName : "MangoShake",
        category : "milkshake",
        price : " $ 9.58",
        img: "https://images.unsplash.com/photo-1623400518626-6ea9ab64c5ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuZ28lMjBzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        BuyNow:"Order Now",
        desc : "Blend the shake. In a blender, combine the milk and ice cream and blend until smooth."
    },
    {
        id: 18,
        foodName : "OreoShake",
        category : "milkshake",
        price : " $ 10.58",
        img: "https://images.unsplash.com/photo-1586917049334-0f99406d8a6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMHNoYWtlfGVufDB8fDB8fHww",
        BuyNow:"Order Now",
        desc : "Blend the shake. In a blender, combine the milk and ice cream and blend until smooth."

    },
    {
        id: 19,
        foodName : "strawberry",
        category : "milkshake",
        price : " $ 8.58",
        img: "https://media.istockphoto.com/id/580108098/photo/milkshake-with-raspberries-and-cream-in-a-glass-jar.jpg?s=612x612&w=0&k=20&c=IqKPLB3tbzL5PGIfbETNA_-6G6IRShAHAitzwWsFHpA=",
        BuyNow:"Order Now",
        desc : "Blend the shake. In a blender, combine the milk and ice cream and blend until smooth."
    },
    {
        id: 20,
        foodName : "ColdCoffe",
        category : "milkshake",
        price : " $ 11.58",
        img: "https://images.unsplash.com/photo-1571328003758-4a3921661729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        BuyNow:"Order Now",
        desc : "Blend the shake. In a blender, combine the milk and ice cream and blend until smooth."

    }
]


function Menu() {
const [selectCategory, setSelectCategory] = useState("all")
 const filterHeader = (category) =>{
    setSelectCategory(category);
    console.log(selectCategory);

    return (  
        <div>
        <h1 id='h5'>Our Menu</h1>
        <hr id='hr6' />
        <section>
            <button>add</button>
             
            <button className='buttoncom' onClick={()=> filterHeader("all")}>All</button>
            <button className='buttoncom' onClick={()=> filterHeader("breakfast")}>Breakfast</button>
            <button className='buttoncom' onClick={()=> filterHeader("milkshake")}>Milk Shake</button>
            <button className='buttoncom' onClick={()=> filterHeader("lunch")}>Lunch</button>
            <button className='buttoncom' onClick={()=> filterHeader("dinner")}>Dinner</button>
            <div>
        <div className='Menu1'>
            {allDish.map((dish) => (selectCategory === "all"  || selectCategory === dish.category)&&(
               
               
            
            < Dish
            key ={dish.id}
            image= {dish.img}
            foodName = {dish.foodName}
            price =   {dish.price}
            description =  {dish.desc}
            BuyNow =  {dish.BuyNow}
            />
             
        
     )        )}
          
        </div>
        </div>
        </section>
        <h1 id='h6'>Menu End</h1>
        </div>
       
    );
            }
        }

export default Menu
       