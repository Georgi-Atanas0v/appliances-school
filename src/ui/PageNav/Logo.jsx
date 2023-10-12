import { NavLink } from "react-router-dom";
import "./Logo.css";
function Logo() {
  return (
    <div className="pl-[20px] md:pl-[50px] logo text-sm sm:text-xl">
      <NavLink to="/">
        <h1>NTG</h1>
        <h2>Appliances</h2>
      </NavLink>
    </div>
  );
}

export default Logo;
