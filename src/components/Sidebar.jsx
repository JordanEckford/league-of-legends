import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 return (
  <>
   {isOpen ? <Hamburger color="#ddbf6d" toggled={isOpen} toggle={setIsOpen} /> : <Hamburger color="#ddbf6d" toggled={isOpen} toggle={setIsOpen} />}
   <div className={`side-menu-${isOpen ? "show" : "hidden"}`}>
    <div>
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
  </>
 );
};
