import { useState } from "react";

import classes from "./UserSignIn.module.css";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import UserSignInSwitch from "./UserSignInSwitch";

const UserSignIn = () => {
  const [type, setType] = useState("login");

  return (
    <div className={classes.signin}>
      <UserSignInSwitch classes={classes} setType={setType} type={type} />
      {type === "login" ? <UserLogin /> : <UserRegister />}
    </div>
  );
};

export default UserSignIn;
