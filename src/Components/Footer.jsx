import React from 'react'
import './Footer.css'
import usimg from '../Images/us.svg'
export default function Footer() {
  return (
     
    <div className='footermain'> 
     
     <div className="footer-left">
         <p className="footpara">Copyright &copy; 2024 LeetCode</p>
     </div>
    <div className="footer-right">
        <a href="App.js">Help Center</a>&nbsp;|&nbsp;
        <a href="App.js">Jobs</a>&nbsp;|&nbsp;
        <a href="App.js">Bug Bounty</a>&nbsp;|&nbsp;
        <a href="App.js">Students</a>&nbsp;|&nbsp;
        <a href="App.js">Terms</a>&nbsp;|&nbsp;
        <a href="App.js">Privacy </a>
         <span>&nbsp;&nbsp;</span>
        <a href="App.js" className='us'><img src={usimg} alt="usimg" className='usimages' />UnitedStates</a>
        
        
        
      
    </div>
    </div>
  )
}
