import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 return (
  <div className="sidebar">
   {isOpen ? <Hamburger color="#fff" toggled={isOpen} toggle={setIsOpen} /> : <Hamburger color="#000" toggled={isOpen} toggle={setIsOpen} />}
   <div className={`side-menu-${isOpen ? "show" : "hidden"}`}>
    <nav>
     <img className="menu-logo" src="/lol-menu-logo-white.png" />
     <Link className="nav-link" to="/" onClick={() => setIsOpen(!isOpen)}>
      Home
     </Link>
     <Link className="nav-link" to="/champions" onClick={() => setIsOpen(!isOpen)}>
      Champions
     </Link>
     <Link className="nav-link" to="/items" onClick={() => setIsOpen(!isOpen)}>
      Items
     </Link>
    </nav>
   </div>
  </div>
 );
};
