import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Profile from "../Profile/Profile";
import RestorePassword from "../RestorePassword/RestorePassword";
import NewPassword from "../NewPassword/NewPassword";
import Error404 from "../Error404/Error404";

export const PATH = {
  LOGIN: "/login",
  REGISTRATION: "/registration",
  PROFILE: "/profile",
  RESTORE_PASSWORD: "/restore-password",
  NEW_PASSWORD: "/new-password",
}

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={PATH.LOGIN} render={() => <Login/>}/>
        <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
        <Route path={PATH.PROFILE} render={() => <Profile/>}/>
        <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePassword/>}/>
        <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>

        <Route render={() => <Error404/>}/>

      </Switch>
    </div>
  );
}

export default Routes;
