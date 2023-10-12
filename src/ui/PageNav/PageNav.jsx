import { useState } from "react";
import Logo from "./Logo";
import "./PageNav.css";
import { NavLink } from "react-router-dom";

function PageNav() {
  const [isActive, setIsActive] = useState("");

  function handleActive() {
    if (!isActive) {
      setIsActive("activeMenu");
    } else {
      setIsActive("");
    }
  }
  return (
    <div className={`navbar`}>
      <div className={`hamburger ${isActive}`} onClick={handleActive}>
        <div className="bun"></div>
        <div className="bun"></div>
        <div className="bun"></div>
      </div>
      <Logo />
      <ul
        className={`class ${isActive} flex gap-5 lg:gap-[50px] text-lg md:text-xl xl-text-2xl`}
      >
        <li>
          <NavLink to="/appliances-school/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/appliances-school//shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/appliances-school//about">About</NavLink>
        </li>
        <li>
          <NavLink to="/appliances-school//contact">Contact</NavLink>
        </li>
      </ul>
      <div className="icons pr-[20px] md:pr-[50px] space-x-6 md:space-x-12 xl:space-x-16">
        <NavLink to="/login">
          <i
            className="fa fa-user text-[19px] sm:text-[25px] md:text-[40px]"
            id="icon"
          ></i>
        </NavLink>
        <i className="fa fa-truck text-[19px] sm:text-[25px] md:text-[40px]"></i>
        <NavLink to="/contact">
          <i className="fa fa-phone text-[19px] sm:text-[25px] md:text-[40px]"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default PageNav;
