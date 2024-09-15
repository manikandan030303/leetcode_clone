import React from 'react'
import './Companyimg.css'
import facebookimg from '../Images/fbimg.svg'
import lmimg from '../Images/lm.png'
import appimg from '../Images/apple.svg'
import uberimg from '../Images/uber.svg'
import ssimg from'../Images/squarespace.svg'
import intelimg from '../Images/intel.svg'
import jetimg from '../Images/jet.jpg'
import amazonimg from '../Images/amazon.svg'
import boaimg from '../Images/boa.svg'
import pinterestimg from '../Images/pinterest.svg'
import ciscoimg from '../Images/cisco.svg'
import stripeimg from '../Images/stripe.svg'
import { FaHeart } from "react-icons/fa6";
import bridgeimg from '../Images/sf.png'
 
export default function Companyimg() {
  return (
    <div className='col-xs-12'> 
    <div className="bridge9">
    <div className="feature-icon-9 no-bedge" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal7 develop-icon">
                            <div className="circle">
                             <img src={bridgeimg}   style={{width:'55px'}} alt=""  className='bridgesvg'/>
                            </div>
                            
                        </div>
                    </div> 
    </div>
    <div className="companypara">
      <h2 className='h2color'><span>Made with <FaHeart /> </span>in SF</h2>
      <div className="companydetials">
      <p className='cd1'>At LeetCode, our mission is to help you improve yourself and land your dream job.</p>
      <p className='cd2'>We have a sizable repository of interview resources for many companies. In the past</p>
      <p className='cd3'>few years, our users have landed jobs at top companies around the world.</p>
      </div>
    
    </div>
     <div className="company-showcase">
        <div className="inner">
           <div className="logo">
            <img src={facebookimg} alt="" className="facebook" />
           </div>
           <div className="logo">
            <img src={lmimg} alt="" className="leepmotion" />
            </div>
            <div className="logo">
                <img src={appimg} alt="" className="apple" />
            </div>
            <div className="logo">
                <img src={uberimg} alt="" className="uber" style={{fill:'black'}}/>
            </div>
            <div className="logo">
                <img src={ssimg} alt="" className="squre" />
            </div>
            <div className="logo">
                <img src={jetimg} alt="" className="jet" style={{fill:'black'}} />
            </div>
            <div className="logo">
                <img src={intelimg} alt="" className="intel" />
            </div>
            <div className="logo">
                <img src={amazonimg} alt="" className="amazon" />
            </div>
            <div className="logo">
                <img src={boaimg} alt="" className="boa" />
            </div>
            <div className="logo">
              <img src={pinterestimg} alt="" className="pinterest" />
            </div>
            <div className="logo">
              <img src={ciscoimg} alt="" className="cisco" />
            </div>
            <div className="logo">
              <img src={stripeimg} alt="" className="stripe" />
            </div>
        </div>
     </div>
    </div>
  )
}
