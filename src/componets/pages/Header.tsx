import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Pages.module.css";
import {PATH} from "./Routes";

function Header() {
  return (
    <div>
      <NavLink to={PATH.LOGIN} activeClassName={s.active} className={s.menuLink}>Login</NavLink>
      <NavLink to={PATH.REGISTRATION} activeClassName={s.active} className={s.menuLink}>Registration</NavLink>
      <NavLink to={PATH.PROFILE} activeClassName={s.active} className={s.menuLink}>Profile</NavLink>
      <NavLink to={PATH.RESTORE_PASSWORD} activeClassName={s.active} className={s.menuLink}>Restore password</NavLink>
      <NavLink to={PATH.NEW_PASSWORD} activeClassName={s.active} className={s.menuLink}>New password</NavLink>
    </div>
  );
}

export default Header;
