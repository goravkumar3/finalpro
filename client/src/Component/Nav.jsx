import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
const Nav = () => {
  return (
    <nav>
      <div className="logo"></div>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      <div className="iconed">
        <FaMoon />
        <IoMdCart />
      </div>
    </nav>
  );
};

export default Nav;
