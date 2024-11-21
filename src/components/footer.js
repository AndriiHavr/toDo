import React from "react";
import ghIcon from "../icon-github.svg"

const Footer = () => {
   return (
      <>
         <h3 className="footer">
            @EclipseAndrew
            <a href="https://github.com/EclipseAndrew" target="_blank" rel="noreferrer">
               <img src={ghIcon} className="gh_icon" alt="github" />
            </a>
         </h3>
      </>
   );
};

export default Footer;
