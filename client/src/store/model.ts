import { AuthStore } from "./auth/auth.model";
import { UserDataStore } from "./userData/userData.model";



export interface AppState {
  auth: AuthStore;
  userData: UserDataStore;


}
