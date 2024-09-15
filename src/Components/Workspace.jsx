import React from "react";
import "./Workspace.css";

import codedit from '../Images/CodeEditor.png'

export default function Workspace() {
  return (
        <div className="workspace-app">
         <div className="codeeditimg">
          <img src={codedit} alt="" className="ceimg" />
         </div>
        </div>
       
       
    
  );
}
