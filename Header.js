import { Link } from 'react-router-dom';
import React from 'react'
import './Header.css'
function Header() {
    return ( 
        <div className='Navbar'>
         
            <a  className='dragon'><i class="fa-solid fa-dragon">Dragon</i></a>
           <ul >
            <li>
                <Link className='Home' to={"/home"}>Home</Link>
            </li>
            <li>
            <Link className='Home' to={"/menu"}>Menu</Link>
            </li>
            <li>
            <Link  className='Home'to={"/about"}>About us</Link>
            </li>
           </ul>
           <button id='btn'>sing in</button>
           <button id='btn'>Sing up</button>
           <i class="fa-solid fa-cart-shopping"></i>
           <i class="fa-solid fa-bag-shopping"></i>
        </div>
     );
}

export default Header;