const UserSignInSwitch = ({ type, setType }) => {
  return (
    <ul>
      <li onClick={() => setType("login")}>Login</li>
      <li onClick={() => setType("register")}>Register</li>
    </ul>
  );
};

export default UserSignInSwitch;
