import React from 'react'
import { SecFooter } from './SecFooter'
import { Footers } from './Footers'

export default function CheckOut() {
  return (
    <div>
      <img className='shop_image' src='../Images/Shopimg.png'/>
      <div className='billing_details_flex' >
        <div>
          <h3>Billing details</h3>
          <form>
            <div>
              <div>First Name</div>
              <input type='text' />
              <div>Last Name</div>
              <input type='text' />
            </div>
            <div>Company Name(Optional)</div>
            <input type='text' /> 
            <div>Country/ Region</div>
            <input type='text' />
            <div>Street address</div>
            <input type='text' />
            <div>Town/ City</div>
            <input type='text' /> 
            <div>Province</div>
            <input type='text' /> 
            <div>Zip Code</div>
            <input type='text' />
            <div>Phone</div>
            <input type='text' />  
            <div>Email address</div>
            <input type='text' />
            <input type='text' />    
          </form>
        </div>
        <div></div>
        <SecFooter/>
        <Footers/>
      </div>
    </div>
  )
}
