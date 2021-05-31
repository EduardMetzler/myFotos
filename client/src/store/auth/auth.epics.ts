import { ofType } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  register,
  REGISTER,
  registerSuccess,
  login,
  LOGIN,
  loginSuccess,
  userLoaded,
  USER_LOADED,
  registerFail,
  USER_LOADING,
  userLoading,
  authError,
  loginFail,
  MY_NEW_TEST,
} from "./auth.actions";
// import { getErrors, clearErrors } from "../error/error.actions";
export const BASE_URL = "http://localhost:5000";

const epicLogin = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof login>>(LOGIN),
    mergeMap((action: any) =>
      ajax({
        url: `${BASE_URL}/api/auth/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: action.payload.email,
          password: action.payload.password,
          // email: "user1@mail.ru",
          // password: "000000",
          // email: "admin@mail.de",
          // password: "000000",
        },
      }).pipe(
        mergeMap((response) => {
          const responseData = response["response"];
          return [
            loginSuccess(responseData["token"]),
            // clearErrors(),

            userLoading(responseData["token"]),
          ];
        }),
        catchError((error) => {
          const responseData = error["response"];
          console.log(responseData);

        //   return [loginFail(), getErrors(responseData["message"])];
        return [loginFail()];

        })
      )
    )
  );

const epicRegister = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof register>>(REGISTER),
    mergeMap(({ payload }) =>
      ajax({
        url: `${BASE_URL}/api/auth/register`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          repeatedPassword: payload.password2,
        },
        
      }).pipe(
        mergeMap((response) => {
          const responseData = response["response"];
          console.log(responseData)

          return [
            registerSuccess(responseData["token"]),
            // clearErrors(),
            userLoading(responseData["token"]),
          ];
        }),
        catchError((error) => {
          const responseData = error["response"];
          // console.log(responseData);

          return [registerFail()];
        //   return [registerFail(), getErrors(responseData["message"])];

        })
      )
    )
  );

const epicUserLoading = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof userLoading>>(USER_LOADING),
    mergeMap(({ payload }) =>
      ajax({
        url: `${BASE_URL}/api/auth/user/loading`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": payload.token,
          authorization: `Baerer ${payload.token}`,
        },
      }).pipe(
        mergeMap((response) => {
          const responseData = response["response"];

          return [
            userLoaded(
              responseData["firstName"],
              responseData["lastName"],
              responseData["admin"],
            //   responseData["myTestsListe"]
            ),
            // clearErrors(),
          ];
        }),
        catchError((error) => {
          const responseData = error["response"];

          return [authError(), ];
        //   return [authError(), getErrors(responseData["message"])];

        })
      )
    )
  );


export const authEpics = [
  epicRegister,
  epicLogin,
  epicUserLoading,

];
