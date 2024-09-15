import React from 'react'
import './Container.css'
import './Navbar'
import { Link } from 'react-router-dom'
import imgback from '../Images/img1 (1).png'
export default function Container() {
  return (
    <div className='containermain'> 
        <div className="inner-row1">
        
        <div className="col md-6 hidden-xs hidden-sm">
          <div className="model-base"> 
                <div className="model">
                    <div className="screen">
                        <div className="col-xs-9">
                        <img src={imgback} alt="" className='animibk' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 introtitle">
            <div className="content text-center">
                <h1 className='h1' style={{color:'white',fontWeight:'500',fontSize:'40px', marginBottom:'35px'}}>A New Way to Learn</h1>
                <p style={{color:'white',opacity:'0.5',fontSize:'15px'}}>LeetCode is the best platform to help you enhance your skills, expand <br/>your knowledge and prepare for technical interviews.</p>
              <Link to='/Signup'><a href="#" id='btn' className="btn sign-up-btn hover-panel round">Create Account &nbsp; &gt;</a></Link>
            </div>
        </div>
    </div>
   
   </div> 
  )
}
