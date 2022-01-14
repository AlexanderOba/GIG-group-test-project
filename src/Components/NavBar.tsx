import React from "react"
import './home.css';




const NavBar = ()=>{
    return(
        <>
          <div className="navbarwraper">
              <div className="navdiv1">Where in the world?</div>
              <div className="navdiv2"><i className="fa fa-moon-o" aria-hidden="true"></i> Dark Mode</div>
          </div>
        </>
    )
}
export default NavBar;