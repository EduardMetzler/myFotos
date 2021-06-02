import { Action } from "redux";
import { UserDataStore } from "./userData.model";

import {


  
} from "./userData.actions";

const INITIAL_STATE = {

};

export default (
  state: UserDataStore = INITIAL_STATE,
  action: Action
): UserDataStore => {
  switch (action.type) {
  
    default:
      return state;
  }
};
