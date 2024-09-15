import React from "react";
import "./Footertop.css";
export default function Footertop() {
  return (
    <div className="footertopmain">
       <p className="footpara">
        <span style={{textAlign:'rignt'}}>If you are passionate about tackling some of the most interesting problems<br/> around, we would love to hear from you.</span>
       </p>
        
      <div className="joinlink">
        <a href="App.js" className="jointeam">
          Join OurTeam &gt;{" "}
        </a>
      </div>
    </div>
  );
}
