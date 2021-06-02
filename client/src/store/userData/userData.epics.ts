import { ofType } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { imageSend, IMAGE_SEND } from "./userData.actions";
// import { getErrors, clearErrors } from "../error/error.actions";
export const BASE_URL = "http://localhost:5000";

const epicImageSend = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof imageSend>>(IMAGE_SEND),
    mergeMap((action: any) =>
      ajax({
        url: `${BASE_URL}/api/image/send`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
            data:action.payload.data
        //   email: action.payload.email,
        //   password: action.payload.password,
        //   // email: "user1@mail.ru",
        //   // password: "000000",
        //   // email: "admin@mail.de",
        //   // password: "000000",
        },
      }).pipe(
        mergeMap((response) => {
          const responseData = response["response"];
          return [
            // loginSuccess(responseData["token"]),
            // clearErrors(),

            // userLoading(responseData["token"]),
          ];
        }),
        catchError((error) => {
          const responseData = error["response"];
          console.log(responseData);

        //   return [loginFail(), getErrors(responseData["message"])];
        return [];

        })
      )
    )
  );

export const authEpics = [
    epicImageSend

];
