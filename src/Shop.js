import React from 'react'
import './Shop.css';
import Products from './Product_list';
import { SecFooter } from './SecFooter';
import { HeroPage } from './HeroPage';

export const Shop = () => {
  return (
    <div className='shop_container'>
    <h1 className='shop_heading'>Shop</h1>
    <img className='shop_image' src='../Images/Shopimg.png'/>      
    <div className='shop_details'>
        <div className='shop_sec_one'>
          <img className='setting' src='../Images/setting.png'/>
          <p className='shop_text'>Filter</p>
          <img className='Vector , setting' src='../Images/Vector.png'/>
          <img className='dot' src='../Images/bi_view-list.png'/>
          <hr className='shop_hr'></hr>
          <p className='shop_text'>Showing 1-16 of 32 results</p>
        </div> 
        <div className='shop_sec_two'>
          <p className='shop_text_sec'>Show</p>
          <input type='text'placeholder='16' className='input_sec'/>
          <p className='shop_text_sec'>Short by</p>
          <input type='text' placeholder='Default' className='input_sec_second'/>  
      </div> 
      </div>
        <Products/>
        <SecFooter/>
    </div>
  )
}
