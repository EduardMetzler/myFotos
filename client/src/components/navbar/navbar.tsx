import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify,faTimes} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { AppState } from "../../store/model";
import './navbar.scss';
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { RegisterPage } from "../../page/Register.page";
import { LoginPage } from "../../page/Login.page";
import { logoutSuccess, userLoading } from "../../store/auth/auth.actions";
import { DashboardPage } from "../../page/Dashboard.page";
import { ErrorComponent } from "../404/error";



interface ConnectedState {
  isAuthenticated: boolean;
  firstName: String;
  token?: String | null;

}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,

  firstName: state.auth.firstName,
  token: state.auth.token,
});

const NavbarComponent: React.FunctionComponent<ConnectedState> = ({
  isAuthenticated,
  firstName,
  token,

}) => {

  const dispatch = useDispatch();
  const location = useLocation();


    const [open, setOpen] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
   
    };
    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  useEffect(() => {
if(width>993){
setOpen(false)

}
},[width]);



if (token && !isAuthenticated) {
  dispatch(userLoading(token));
}


  return (
    <>
 
     <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo ">Logo</a>
  
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
        <li>
          {!isAuthenticated ? (
            <Link to="login">Anmelden </Link>
          ) : (
            <div style={{}}>
                    <Link  to="dashboard">
                {" "}
                Hallo {firstName} !{" "}
              </Link>
     
            </div>
          )}
        </li>
        <li>
          {isAuthenticated ? (
            <Link onClick={() => dispatch(logoutSuccess())} to="/">
              Abmelden{" "}
            </Link>
          ) : <Link to="register">Registrieren</Link>}
        </li>
   

         
       
        </ul>
        
        </div>
        
        
        </nav> 
      
        <div className="sidenav-bar   hide-on-large-only" sidenav-is-open={open.toString()} >
  
  <div className="item">myName</div>
  <div className="item">Anmelden</div>


</div>
<div className="row contentSite " sidenav-is-open={open.toString()} >
<div className="col s12 m10 offset-m1 l8 offset-l2 xl8 offset-xl2">
{localStorage.getItem("token") && (location.pathname === "/login" || location.pathname === "/register") &&   
 <Switch>
<Redirect to="/dashboard" />
      </Switch>  }

 </div>
        <div className="col s12 m10 offset-m1 l8 offset-l2 xl8 offset-xl2">
   
{localStorage.getItem("token") ? (          <Switch>

      <Route path="/dashboard" exact>
        <DashboardPage />
   
      </Route>


       {/* <Redirect to="/dashboard" /> */}
       
           <ErrorComponent />
    </Switch>):(          <Switch>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>


      <Redirect to="/login" />
  

    </Switch>)}
        </div>
      </div>
       



     

       
    </>
  );
};

export const Navbar = connect(mapStateToProps)(NavbarComponent);
