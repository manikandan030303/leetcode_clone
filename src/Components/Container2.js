import React from 'react'
 import './Container2.css'
 import flip from '../Images/flip.png'
import { FaGraduationCap } from "react-icons/fa";
export default function Container2() {
  return (
    <div className='innerrow-2'>
        <div className="col-sm-6 col-sm-pull-6">
            <div className="content-section">
                <div className="sec-header">
                    <h2>Start Exploring</h2>
                    <div className="feature-icon-base no-bedge" style={{transform:"scale(0.7)"}}>
                        <div className="icon teal develop-icon">
                            <div className="circle">
                            <FaGraduationCap className='fa' />
                            </div>
                            
                        </div>
                    </div> 
                    <div className="contentlink2">
                            <p><span className='cnt2'>Explore is a well-organized tool that helps you get the most out of<br/> LeetCode by providing structure to guide your progress towards the next<br/> step in your programming career.</span></p>
                            <a href="" className='alink2'>
                                <p className="link">Get Started &nbsp; &gt;</p>
                            </a>
                    </div>   

                </div>
                <div className="flipimgmain">
                <img src={flip} alt="" className="flipimg" />
                </div>
               
            </div>
        </div>
    </div>
  )
}
