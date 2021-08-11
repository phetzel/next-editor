import classes from "./UserSignInSwitch.module.css";
const UserSignInSwitch = ({ type, setType }) => {
  return (
    <ul className={classes.switch}>
      <li
        className={type === "login" ? classes.active : classes.inactive}
        onClick={() => setType("login")}
      >
        Login
      </li>
      <li
        className={type === "register" ? classes.active : classes.inactive}
        onClick={() => setType("register")}
      >
        Register
      </li>
    </ul>
  );
};

export default UserSignInSwitch;
