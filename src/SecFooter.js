import React from 'react'
import './SecFooter.css'
export const SecFooter = () => {
  return (
    <div className='secfooter_container'>
        <div className='secfooter_flex'>
            <img className='secfooter_icon' src='../Images/trophy.png'/>
            <div className='icon_div' >
                <h4>High Quality</h4>
                <p className='secfooter_pera'> Crafted from top material</p>
            </div>
        </div>

        <div className='secfooter_flex'>
            <img className='secfooter_icon' src='../Images/Group.png'/>
            <div className='icon_div'>
                <h4>High Quality</h4>
                <p className='secfooter_pera'> over 2 years</p>
            </div>
        </div>

        <div className='secfooter_flex'>
            <img className='secfooter_icon'  src='../Images/shipping.png'/>
            <div className='icon_div'>
                <h4>High Quality</h4>
                <p className='secfooter_pera'> Order over 150 $</p>
            </div>
        </div>

        <div className='secfooter_flex'>
            <img  className='secfooter_icon' src='../Images/customer-support.png'/>
            <div className='icon_div'>
                <h4>High Quality</h4>
                <p className='secfooter_pera'> Dedicated support</p>
            </div>
        </div>
        
            
    </div>
  )
}
