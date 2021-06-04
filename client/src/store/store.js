import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import { authEpics } from "./auth/auth.epics";
import authReducer from "./auth/auth.reducer";

import { userDataEpics } from "./userData/userData.epics";
import userDataReducer from "./userData/userData.reducer";


const epic = combineEpics(...authEpics,...userDataEpics);

const epicDependencies = {};
const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      userData: userDataReducer,

  
    }),
    undefined,
    composeWithDevTools(compose(applyMiddleware(epicMiddleware)))
  );
  epicMiddleware.run(epic);

  return store;
};
