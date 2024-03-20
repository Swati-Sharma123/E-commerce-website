import React from 'react'
import { SecFooter } from './SecFooter'
import { HeroPage } from './HeroPage'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
export default function Contact() {
  return (
    <div>
      <div>
        <div className='contact_heading'>
        <img src='../Images/Meubel House_Logos.png' />
        <h1 className='Contact'>Contact</h1>
        <img className='shop_image' src='../Images/Shopimg.png'/>
        </div>
      </div>

    <div>
      <div>
        <h2>Get In Touch With Us</h2>
        <p className='contact-form-head'>For more information about our products & service please feel free to drop us</p>
        <p className='contact-form-head'>An Email our staf always be there to help out. Do not hesitate</p>
      </div>
      
      <div>
        <div>
          <FaLocationDot />
          <div>Address</div>
          <p>235 5th SE Avenue New York NY0000 statue.</p> 
        </div>
      <div>
          <FaPhoneAlt />
          <div>Phone</div>
          <p>Mobile : +(84)546-67238</p>
          <p>Hotline : +(84)546-67238 </p> 
      </div>
      <div>
          <MdWatchLater />
          <div>Working Time</div>
          <p>Monday-Friday: 9:00-22:00</p>
          <p>Saturday-Sunday: 9:00-21:00</p>
        </div>
      </div>
       
      <div>
      <form>
      <div>
        <label> Your Name</label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div>
        <label>Email Address</label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div>
        <label>Subject</label>
        <input className="form-control" type="text" id="name" required />
      </div> 
      <div>
        <label>Message</label>
        <input className="form-control" type="text-area" id="name" required />
      </div>
      <button>Submit</button>
        </form>
        </div>
    </div>

      <HeroPage/>
      <SecFooter/>
    </div>
  )
}
