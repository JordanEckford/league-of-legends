import { Link } from "react-router-dom";

export const Navbar = () => {
 return (
  <div className="navbar">
   <nav>
    <img className="menu-logo" src="/lol-menu-logo-white.png" />
    <Link className="nav-link" to="/">
     Home
    </Link>
    <Link className="nav-link" to="/champions">
     Champions
    </Link>
    <Link className="nav-link" to="/items">
     Items
    </Link>
   </nav>
  </div>
 );
};
