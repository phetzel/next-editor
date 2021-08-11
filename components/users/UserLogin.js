import { useState } from "react";

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
    <div>
      <h2> User Login</h2>
      <form>
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
        <div onClick={handleLogin}>
          <p>Login</p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
