import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import { AppState } from "../../store/model";
import { login, logoutSuccess } from "../../store/auth/auth.actions";
import axios from "axios";
import { async } from "rxjs/internal/scheduler/async";
import { dispatch } from "rxjs/internal/observable/pairs";
import {
  imageSend,
  userDataLoading,
} from "../../store/userData/userData.actions";

// import "./login.scss";
// import ".././style.css";

interface OwnProps {
  token?: String | null;
}

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({
  token: state.auth.token,
});

const UserDashboardComponent: React.FunctionComponent<
  ConnectedState & OwnProps
> = ({ token }) => {
  const [fileData, setFileData] = useState();
  const dispatch = useDispatch();

  const fileChangeHanler = (e: any) => {
    setFileData(e.target.files);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const myFile: any = fileData;
    const data = new FormData();
    for (let i = 0; i < myFile.length; i++) {
      data.append("images", myFile[i]);
    }
    fetch("http://localhost:5000/api/userData/imageSave", {
      method: "POST",
      body: data,
      headers: {
        authorization: `Baerer ${token}`,
      },
    })
      .then((result) => {
        dispatch(userDataLoading());
        // console.log("file sent successful");
        // return result.json();
      })
      // .then((result) => {
      //   console.log(result.file);
      // })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHanler} multiple />
        <button type="submit">send</button>
        {/* <img src={`http://localhost:5000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/> */}
        <img
          src={`http://localhost:5000/1622648055235--drilldown.jpg`}
          height="200"
          className="card-img-top img-responsive"
          alt="img"
        />
      </form>
    </>
  );
};

export const UserDashboard = connect(mapStateToProps)(UserDashboardComponent);
