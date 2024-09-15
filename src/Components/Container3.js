import React from 'react'
import './Container3.css'
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { LuBuilding } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
export default function Container3() {
  return (
    <div className='inner-row-3'>
        <div className="col-sm-6">
            <div className="content3full">
            <div className="content3">
            <div className="feature-icon-3" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal1 develop-icon">
                            <div className="circle">
                            <h4 className="counts">3400</h4>
                            </div>
                            
                        </div>
            </div>
            <div className="feature-icon-4" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal2 develop-icon">
                            <div className="circle">
                            <FaUsers className='fu'/>
                           
                            </div>
                            
                        </div>
            </div>
            <div className="feature-icon-5" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal3 develop-icon">
                            <div className="circle">
                             <FaTrophy className='ft'/>
                            </div>
                            
                        </div>
            </div>
            
        </div>
        <div className="contentnut">
        <h2 style={{color:"rgb(37,154,243)"}} className='cont3head'>Questions, Community & Contests</h2>
            <p className="con3detials" style={{textAlign:"left"}}>Over 3400 questions for you to practice. Come andc join one of the<br/> largest tech communities with hundreds of thousands of active users<br/> and participate, in our contests to challenge yourself and earn<br/> rewards.</p>
            <a href="" className='alink3'><span>View Questions  &nbsp; &gt;</span></a>
        </div>
            </div>
        <div className="content4full">
        <div className="content4">
        <div className="feature-icon-6" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal4 develop-icon">
                            <div className="circle">
                            <FaBriefcase className='fbc'/>
                            </div>
                            
                        </div>
            </div>
            <div className="feature-icon-7" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal5 develop-icon">
                            <div className="circle">
                            <LuBuilding className='fbi'/>
                            </div>
                            
                        </div>
            </div>
          
          </div>
          <div className="contentbb">
        <h2 style={{color:"rgb(183,137,43)"}} className='cont3head'>Companies & Candidates</h2>
            <p className="con3detials" style={{textAlign:"left"}}>Not only does LeetCode prepare candidates for technical interviews,<br/> we also help companies identify top technical talent. From<br/> sponsoring contests to providing online assessments and training,<br/> we offer numerous services to businesses.</p>
            <a href="" className='alink3'><span>Business Oppertunities &nbsp; &gt;</span></a>
        </div>

        </div>
      
    </div>
    <div className="Content5center">
        <div className="content5">
        <div className="feature-icon-8" style={{ transform: "scale(0.7)" }}>
            <div className="icon teal6 develop-icon">
              <div className="circle">
                <FaCode className="fcode" />
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="contentcode">
        <h2 className='cont5head'>Developer</h2>
            <p className="con5detials" style={{textAlign:'center'}} >We now support 14 popular coding languages. At our core, LeetCode is about<br/> developers. Our powerful development tools such as Playground help you test,<br/> debug and even write your own projects online.</p>
             
        </div>
    </div>
  )
}
