import { useState } from "react";
import PageNav from "../../ui/PageNav/PageNav";

import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "./LoginSlice";
import { useNavigate } from "react-router";

function UsersLogging() {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailState || !passwordState) return;

    if (emailState === email && passwordState === password) {
      dispatch(logInUser());
      navigate("/appliances-school/");
    } else setError("wrong credentials");
  }

  return (
    <>
      <PageNav />
      <form onSubmit={handleSubmit}>
        <div className="cont w-full mt-[50px] sm:mt-[100px]">
          <div className="email__container space-y-5 px-4 py-3 sm:py-6 w-[50vw]">
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Email</label>
              <input
                type="emailState"
                className="input grow"
                placeholder="Email"
                value={emailState}
                onChange={(e) => setEmailState(e.target.value)}
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Парола</label>
              <input
                type="password"
                className="input grow"
                placeholder="Парола"
                value={passwordState}
                onChange={(e) => setPasswordState(e.target.value)}
              ></input>
            </div>
          </div>
          <h1>{error.length > 0 && error}</h1>
          <button
            className="bg-[#7D7C7C] rounded-md mt-5 text-center text-sm py-0.5 px-4 sm:py-1 sm:px-6"
            // onClick={handleClick}
          >
            Log In
          </button>
        </div>
      </form>
    </>
  );
}

export default UsersLogging;
