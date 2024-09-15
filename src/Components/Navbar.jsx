import React from 'react'
import leetpng from '../Images/LeetCode.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

 


export default function Navbar() {

 
  return (
    <div className="landing-nav">
    <div className='navbarhead-content '> 
    <div className="navlogo">
     <img src={leetpng} alt='navbarlogo' className='logo-img' />
     <div className="logoname">
       <span className="lgname">LeetCode</span>
     </div>
 </div>
 <div className="navbar-links-right">
   <div className="nav-menu">
       <a href="App.js"><span className='premium'>Premium</span></a>
       <a href='App.js'><span className='navl2'>Explore</span></a>
       <a href='App.js'><span className='navl2'>Product</span></a>
       <a href='App.js'><span className='navl2'>Developer</span></a>
        
     <Link to='/Signin'><a href='App.js'><span className='navl'>Sign in</span></a> </Link>
   </div>
   </div>
 </div>

 </div>
   
  )
}
