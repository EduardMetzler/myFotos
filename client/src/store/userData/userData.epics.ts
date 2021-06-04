import { ofType } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { imageSend, IMAGE_SEND } from "./userData.actions";
// import { getErrors, clearErrors } from "../error/error.actions";
export const BASE_URL = "http://localhost:5000";

// const epicImageSend = (action$: any) =>
//   action$.pipe(
//     ofType<ReturnType<typeof imageSend>>(IMAGE_SEND),
//     mergeMap(({payload}) =>
//       ajax({
//         url: `${BASE_URL}/api/userData/imageSave`,
//         method: "POST",
//         // headers: {
//         //   "Content-Type": "application/json",
//         // },
//         body: {
//             data:payload.data
        
//         },
//       }).pipe(
//         mergeMap((response) => {
//           const responseData = response["response"];
//           return [
     
//           ];
//         }),
//         catchError((error) => {
//           const responseData = error["response"];
//           console.log(responseData);

    
//         return [];

//         })
//       )
//     )
//   );

export const userDataEpics = [
    // epicImageSend

];
