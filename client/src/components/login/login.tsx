import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import { AppState } from "../../store/model";
import { login, logoutSuccess } from "../../store/auth/auth.actions";

import "./login.scss";
// import ".././style.css";

interface OwnProps {}

interface ConnectedState {
  isAuthenticated: boolean;
  isLoading: boolean;
//   error: String;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
//   error: state.error.message,
});

const LoginComponent: React.FunctionComponent<ConnectedState & OwnProps> = ({
  isLoading,
  isAuthenticated
//   error,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = (event: any) => {
    dispatch(login(email, password));
    event.preventDefault();
  };

  const checkData = () => {
    if (email.length < 1 || password.length < 6 || isLoading) {
      return "btn disabled";
    }
    return "btn";
  };

  // useEffect(() => {
  //   if(isAuthenticated){
  //     history.push("dashboard");

   
    
  //   }
  //   },[isAuthenticated]);



  return (
    <div className="row login-container">
      <div className="col m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
        <div className="card">
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <label>
                E-Mail:
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <input type="submit" value="Anmelden" className={checkData()} />
              <Link to="/register">
                <span className="register-link"> Registrieren</span>
              </Link>
            </form>
          </div>
        </div>
        <div>
          {/* {error === "Falsche E-Mail oder Passwort" ? (
            <h5 className="warningPen">{error}</h5>
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export const Login = connect(mapStateToProps)(LoginComponent);
