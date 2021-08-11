import { useState } from "react";

import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import UserSignInSwitch from "./UserSignInSwitch";

const UserSignIn = () => {
  const [type, setType] = useState("login");

  return (
    <div>
      <UserSignInSwitch setType={setType} type={type} />
      {type === "login" ? <UserLogin /> : <UserRegister />}
    </div>
  );
};

export default UserSignIn;
