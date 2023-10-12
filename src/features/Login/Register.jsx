import { useState } from "react";
import { createUser } from "./LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import PageNav from "../../ui/PageNav/PageNav";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !email || !password || !phoneNumber) return;

    const newUser = {
      username,
      email,
      password,
      phoneNumber,
    };
    dispatch(createUser(newUser));
    navigate("/appliances-school/");
    setUsername("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  }
  return (
    <>
      <PageNav />
      <div className="mt-[100px]">
        <h1 className="text-xl sm:text-3xl text-center font-semibold">
          <Link to="/userLogIn">Sign In</Link>/<Link to="/login">Register</Link>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="cont w-full mt-[50px] sm:mt-[100px]">
          <div className="email__container space-y-5 px-4 py-3 sm:py-6 w-[50vw]">
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Име</label>
              <input
                type="text"
                className="input grow"
                placeholder="Име"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Email</label>
              <input
                type="email"
                className="input grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Парола</label>
              <input
                type="password"
                className="input grow"
                placeholder="Парола"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-5 gap-2 flex items-center flex-col sm:flex-row">
              <label className="sm:basis-20">Телефон</label>
              <input
                type="tel"
                className="input grow"
                placeholder="Телефон"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(
                    Number(e.target.value) ? e.target.value : phoneNumber
                  )
                }
              ></input>
            </div>
          </div>
          <button className="mb-10 bg-[#7D7C7C] rounded-full text-center text-base sm:text-xl py-1.5 px-4 sm:py-2.5 sm:px-10 text-white">
            Регистрирай се
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
