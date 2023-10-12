import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { logOff } from "./LoginSlice";
import { useNavigate } from "react-router";

function Profile() {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(logOff());
    navigate("/");
  }
  return (
    <div className="user-profile">
      <div className="profile-picture">{/* Add your profile picture */}</div>
      <div className="personal-info">
        <h2>Personal Information</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone Number: {user.phoneNumber}</p>
      </div>
      <button
        className="bg-[#7D7C7C] rounded-md mt-5 text-center text-sm py-0.5 px-4 sm:py-1 sm:px-6"
        onClick={handleClick}
      >
        Log off
      </button>
    </div>
  );
}

export default Profile;
