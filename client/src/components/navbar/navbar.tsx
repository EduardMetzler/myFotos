import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify,faTimes} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { AppState } from "../../store/model";
import './navbar.scss';



interface ConnectedState {

}

const mapStateToProps = (state: AppState) => ({

});

const NavbarComponent: React.FunctionComponent<ConnectedState> = ({

}) => {
    const [open, setOpen] = useState(false);
    console.log(open)
 

  return (
    <>
     <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo brand-logob">Logo</a>
  
    <div>
        {!open ?        
         <a href="#" className="sidenav-trigger" onClick={()=>setOpen(!open)}>     
             <FontAwesomeIcon
            icon={faAlignJustify}
        /></a>:
             <a href="#" className="sidenav-trigger" onClick={()=>setOpen(!open)}>     
         <FontAwesomeIcon
           icon={faTimes}
        /></a>}
    </div>

       
        <ul className="right hide-on-med-and-down">
            <li><a href="">Anmelden</a></li>
         
       
        </ul>
        
        </div>
        
        
        </nav> 
      
        <div className="sidenav-bar   hide-on-large-only" sidenav-is-open={open.toString()} >
  
  <div className="item">myName</div>
  <div className="item">Anmelden</div>

</div>
       



     

       
    </>
  );
};

export const Navbar = connect(mapStateToProps)(NavbarComponent);
