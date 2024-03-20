import React from 'react';
import './Product_list.css'

export default function Products() {
  return (
    <div>
    <div className='thired_container'>
      <h2 className='products'>Our Products</h2>
      
      <div className='product_container'>

      <div>
      <div className='product_flex'>
        <img src='../Images/image_one.png' alt=''/>
      </div>
      <div className='product_details'>
        <h4><b>Syltherine</b></h4>
        <p>Stylish cafe chair</p>
        <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
      </div>
      </div>
      
      
      <div>
      <div className='product_flex'>
        <img src='../Images/image_two.png' alt=''/>
      </div>
      <div className='product_details'>
        <h4><b>Syltherine</b></h4>
        <p>Stylish cafe chair</p>
        <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>  
      </div>
      </div>
      
      <div>
      <div className='product_flex'>
        <img src='../Images/image_three.png' alt=''/>
      </div>
      <div className='product_details'>
        <h4><b>Syltherine</b></h4>
        <p>Stylish cafe chair</p>
        <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
      </div>
      </div>
      
      <div>
      <div className='product_flex'>
        <img src='../Images/image_four.png' alt=''/>
      </div>
      <div className='product_details'>
        <h4><b>Syltherine</b></h4>
        <p>Stylish cafe chair</p>
        <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
      </div>
      </div>
      </div>

    <div className='product_container'>
      <div>
        <div className='product_flex'>
        <img src='../Images/image_five.png' alt=''/>
        </div>
        <div className='product_details'>
          <h4><b>Syltherine</b></h4>
          <p>Stylish cafe chair</p>
          <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
        </div>
        </div>
      
      <div>
      <div className='product_flex'>
        <img src='../Images/image_six.png' alt=''/>
      </div>
        <div className='product_details'>
          <h4><b>Syltherine</b></h4>
          <p>Stylish cafe chair</p>
          <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
        </div>
      </div>
      
      <div>
      <div className='product_flex'>
        <img src='../Images/image_seven.png' alt=''/>
      </div>
        <div className='product_details'>
          <h4><b>Syltherine</b></h4>
          <p>Stylish cafe chair</p>
          <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
        </div>
      </div>
      
      <div>
      <div className='product_flex'>
        <img src='../Images/image_eight.png' alt=''/>
      </div>
        <div className='product_details'>
          <h4><b>Syltherine</b></h4>
          <p>Stylish cafe chair</p>
          <p><b>Rp 2.500.000</b> <s>Rp 3.500.000</s></p>
        </div>
      </div>
    </div>
    <button className='more_btn'> Show More</button>
    </div>
    </div>
  )
}
