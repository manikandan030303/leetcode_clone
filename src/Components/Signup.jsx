import React from "react";
import './Signup.css'
import logosign from "../Images/2944960.jpg";
import usimg from '../Images/us.svg'
import signleet from '../Images/logosign.svg'
import verify from '../Images/CLOUDFARE.gif'
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate=useNavigate('')
  function handleChange(){
    navigate("/")
  }
  return (
    <div className="signup-main">
      <div className="signflex flex">
      <div className="navbar-left-log-cnt">
     <img src={logosign} alt="logosign" className="logopng4" style={{height:'22px',}} />
     <div className="nav-sign-menu">
     <a href="App.js">
            <span className="sig1">Explore</span>
          </a>
          <a href="App.js">
            <span className="sig1">Problems</span>
          </a>
          <a href="App.js">
            <span className="sig1">Contest</span>
          </a>
          <a href="App.js">
            <span className="sig1">Discuss</span>
          </a>
          <a href="App.js">
            <span className="sig1">Interview<MdOutlineKeyboardArrowDown /></span>
          </a>
          <a href="App.js">
            <span className="sig2">Store<MdOutlineKeyboardArrowDown /></span>
          </a>
     </div>
         
     </div>
     <div className="nav-right-sign-cnt">
     <a href="App.js">
            <span className="Premium1">Premium</span>
          </a>
     </div>
      </div>
      <p className="signpara" style={{color:'white',backgroundColor:'#FFB700'}}>We will be undergoing a planned 10-minute maintenance starting at 10 PM UTC on July 28th 2024. We apologize in advance for any inconvenience.</p>
      <div className="signinbox">
        <div className="signinboxborder">
          <img src={signleet} alt="" className="leetcodesign" />
          <form>
            <span className="username">
              <input type="text" className="classuser" spellCheck='false' autoCorrect="off" autoCapitalize="off" placeholder="Username" name="username"/>
            </span>
            <span className="password2">
              <input type="password" className="passwordsign" spellCheck='false' autoCorrect="off" autoCapitalize="off" placeholder="Password" name=" Password" /> 
            </span>
            <span className="passwordenter2">
              <input type="password" className="passwordsign2" spellCheck='false' autoCorrect="off" autoCapitalize="off" placeholder="Confirm Password" name=" confirm Password" />  
            </span>
            <span className="email">
              <input type="email" className="emailsign" spellCheck='false' autoCorrect="off" autoCapitalize="off" placeholder="E-mail Address" name="  email" />
            </span>
            <img src={verify} alt="" className="cloud" />
            <button className="signupbtn" onClick={handleChange}>Sign Up</button>
          
          </form>
          <p className="signuppara">Have an account&#63;<a href="App.js" className="sign-in-link-a">&nbsp;Sign In</a></p>
          <p className="p2">are you can sign in with</p>
          
 
<AiFillGoogleCircle className="goolicon"/>  <FaGithub className="githu" />   <FaFacebook className="fb" />

        </div>
      </div>
     <div className="footersign">
     <div className="footer-left-sign ">
         <p className="footparasign" style={{fontSize:'15px'}}>Copyright &copy; 2024 LeetCode</p>
         <div className="linkssign" style={{fontSize:'15px'}}>
         <a href="App.js">Help Center</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Jobs</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Bug Bounty</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Students</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Terms</a>&nbsp;&nbsp;&nbsp;
        <a href="App.js">Privacy Policy</a>
         </div>
       
     </div>
    <div className="footer-right-sign">
       
         <span>&nbsp;&nbsp;</span>
          <a href="App.js" className='usimg'><img src={usimg} alt="usimg" className='usimages' />UnitedStates</a>
        
        
        
      
    </div>
     </div>
    </div>
  );
}
