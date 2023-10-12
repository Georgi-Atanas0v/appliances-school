import { useSelector } from "react-redux";
import PageNav from "../../ui/PageNav/PageNav";
import Register from "./Register";
import Profile from "./Profile";
import UsersLogging from "./UsersLogging";

function Login() {
  const { username, isLoggedIn } = useSelector((state) => state.login);
  return (
    <>
      {isLoggedIn ? (
        <Profile />
      ) : !isLoggedIn && username.length ? (
        <UsersLogging />
      ) : (
        <Register />
      )}
    </>
  );
}

export default Login;
