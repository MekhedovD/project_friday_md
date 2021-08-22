import {combineReducers, createStore} from 'redux';
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";
import {restorePasswordReducer} from "./restorePasswordReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  newName: registrationReducer,
  name: profileReducer,
  password: restorePasswordReducer,
  newPassword: restorePasswordReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
