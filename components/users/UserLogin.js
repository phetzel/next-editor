import { useState } from "react";

import classes from "./UserLogin.module.css";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const obj = {
      email,
      password,
    };
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}> User Login</h2>
      <form className={classes.form}>
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
        <div className={classes.button} onClick={handleLogin}>
          <p>Login</p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
