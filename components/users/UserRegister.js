import { useState } from "react";

import classes from "./UserLogin.module.css";

const UserRegister = () => {
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = () => {
    const obj = {
      handle,
      email,
      password,
      password2,
    };
  };
  return (
    <div className={classes.container}>
      <h2 className={classes.title}> User Register</h2>
      <form className={classes.form}>
        <label>
          Handle:
          <input
            type="text"
            onChange={(event) => setHandle(event.target.value)}
            value={handle}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </label>
        <label>
          Repeat Password:
          <input
            type="password"
            onChange={(event) => setPassword2(event.target.value)}
            value={password2}
          />
        </label>
        <div className={classes.button} onClick={handleRegister}>
          <p>Register</p>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
