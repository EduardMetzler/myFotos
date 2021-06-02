import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import { AppState } from "../../store/model";
import { login, logoutSuccess } from "../../store/auth/auth.actions";
import axios from "axios";

// import "./login.scss";
// import ".././style.css";

interface OwnProps {}

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

const UserDashboardComponent: React.FunctionComponent<
  ConnectedState & OwnProps
> = ({}) => {
  const [fileData, setFileData] = useState();

  const fileChangeHanler = (e: any) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const a: any = fileData;

    const data = new FormData();
    data.append(`images`, a);
    fetch("http://localhost:5000/multiple", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("file sent successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHanler} />
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

// import React, { useEffect, useState } from "react";
// import { connect, useDispatch } from "react-redux";

// import { Link, useHistory } from "react-router-dom";
// import { AppState } from "../../store/model";
// import { login, logoutSuccess } from "../../store/auth/auth.actions";
// import axios from "axios";
// import { imageSend } from "../../store/userData/userData.actions";

// // import "./login.scss";
// // import ".././style.css";

// interface OwnProps {}

// interface ConnectedState {}

// const mapStateToProps = (state: AppState) => ({});

// const UserDashboardComponent: React.FunctionComponent<
//   ConnectedState & OwnProps
// > = ({}) => {
//   const [fileData, setFileData] = useState();
//   const dispatch = useDispatch();

//   const fileChangeHanler = (e: any) => {
//     setFileData(e.target.files[0]);
//   };

//   const onSubmitHandler = (e: any) => {
//     e.preventDefault();
//     const a: any = fileData;

//     const data = new FormData();
//     data.append(`images`, a);
//     console.log(a, data);
//     dispatch(imageSend(data));
//   };

//   return (
//     <>
//       <form onSubmit={onSubmitHandler}>
//         <input type="file" onChange={fileChangeHanler} />
//         <button type="submit">send</button>
//         {/* <img src={`http://localhost:5000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/> */}
//         <img
//           src={`http://localhost:5000/1622648055235--drilldown.jpg`}
//           height="200"
//           className="card-img-top img-responsive"
//           alt="img"
//         />
//       </form>
//     </>
//   );
// };

// export const UserDashboard = connect(mapStateToProps)(UserDashboardComponent);
