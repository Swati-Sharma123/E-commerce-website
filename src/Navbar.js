import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";


export default function Navbar() {
  return (
    <nav className='navbar'>
    <ul>
    <li className='furnior'>
    <img className='home_img' src='./Images/Frame.png'/>
    </li>
    </ul>
    
    <ul className='navbar_item'>
    <li className='list_name'><NavLink to="/" className='home'>Home</NavLink></li>
    <li className='list_name'><NavLink to="/shop">Shop</NavLink></li>
    <li className='list_name'> <NavLink to="/about">About</NavLink></li>
    <li className='list_name'><NavLink to="/Contact">Contact</NavLink></li>
    </ul>

    <ul className='navbar_icon'>
    <li><NavLink to="/"><FaUserAlt size="60%"/></NavLink></li>
    <li><NavLink to="/"><FaSearch size="60%"/></NavLink></li>
    <li><NavLink to="/"><FaRegHeart size="60%"/></NavLink></li>
    <li><NavLink to="/ cart"><MdShoppingCart size="60%"/></NavLink></li>
    
    </ul>

    </nav>
  )
}
