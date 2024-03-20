import React from 'react'
import Product_list from './Product_list';
import './Home.css';


export default function Home() {
  return (
    <div className='home_container'>
    
    <div className='first_container'>
    <div className='arrivel_container'>
      <h4>New Arrivel</h4>
      <h1 className='discover_collection'>Discover Our New Collection</h1>
      <p>Specifically, at some point, you will likely have to fire your boss  move on to your next job.</p>
      <button className='btn'>BUY NOW</button>
    </div>
      <img className='first_Image' src="../Images/backgroundImg.png"></img>
    </div>
    

    <div className='second_container'>
      <h3 className='title'>Browse The Range</h3>
      <p className='contain'>You will likely have to fire your boss  move on to your Job.</p>
      <span className='flex_image'>
        <img className='flex_image1' src='../Images/image1.png'></img>
        <img className='flex_image2' src='../Images/image2.png'></img>
        <img className='flex_image3' src='../Images/image3.png'></img>
        <div className='room'>
        <span className='dining'>Bedroom</span>
        <span className='living'>Living</span>
        <span className='bedroom'>Dining</span>
        </div>
      </span>
    </div>
    
    <Product_list/>

    <div className='room_inspiration-container'>
    <div className='room_inspiration_flexOne'>
      <h1 className='about_room'>50+ Beautiful rooms inspiration</h1>
      <p>Our designer already made a lots of beautiful prototipe of rooms that inspire you.</p>
      <button className='Explore_more_btn'>Explore More</button>
    </div>
    <div>
      <img className='room_inspration_img' src='../Images/Rectangle.png'/>
    </div>
    </div>

    <div>
    <div className='FuniroFurniture_heading'>
      <p className='Furniture_pera'>Share your setup with</p>
      <h1 className='FuniroFurniture'>#FuniroFurniture</h1>
    </div>
      <div>
        <div className='FuniroFurniture_img'>
          <img  className='sideimg' src='../Images/first.png'/>
          <img className='leptop' src='../Images/second.png'/>

          <img className='dining_table' src='../Images/three.png'/>
          <img className='bed' src='../Images/four.png'/>
          <img className='table' src='../Images/five.png'/>
        </div>
        <div className='FuniroFurniture_img'>
        <div className='Funiro_img_three'>
        <img className='chair' src='../Images/six.png'/>
        <img className='pot' src='../Images/saven.png'/>
        </div>
        <div className='Funiro_img_fourth'>
        <img className='frame' src='../Images/eight.png'/>
        <img className='kitchen' src='../Images/nine.png'/>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
