import React from 'react' 
import './Footers.css';
import { Link } from 'react-router-dom'

export const Footers = () => {
  return (
    <div>
    <hr className='hr1'></hr>
    <div className='footer'>
     <div className='footer_sec_one'>
        <h2 >Funiro.</h2>
        <p className='nav_address'>400 university Drive Suite 200 Coral  Gables, <br/> FL 333134 USA</p>
     </div>
    
    <div>
    <p className='Links'>Links</p>
    <div className='link'><Link >Home</Link></div>
    <div className='link'><Link >Shop</Link></div>
    <div className='link'><Link >About</Link></div>
    <div className='link'><Link >Contact</Link></div>
    </div>
    
    <div>
    <p>Help</p>
    <p className='help_flex'>Payment Options</p>
    <p className='help_flex'>Returns</p>
    <p className='help_flex'>Privacy Policies</p>
    </div>
    
    <div className='footer_sec_four' >
    <p>Newsletter</p>
    <div className='Newsletter'>
    <input className='Email_sec' type='email' placeholder='Enter Your Email Address'/>
    <p className='subscribe'>SUBSCRIBE</p>
    </div>
    </div>
    </div>
    <hr className='hr2'></hr>
    <div className='bottom'>2024 Funiro. All right reversed</div>
    </div>
    
  )
}
