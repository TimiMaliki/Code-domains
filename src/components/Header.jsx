import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (

    <nav className="w-full bg-black justify-between text-center items-center p-8 sticky">
      <h1 className="text-xl">Emmanuel</h1>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base">
     <Link to="/">Home</Link>
        </li>
        <li className="font-sans text-base">
         <Link to="/projects">Portfolio</Link>
        </li>
        <li className="font-sans text-base">
         <Link to="/about">About Us</Link>
        </li>
        <li className="font-sans text-base">
        <Link to="/testimony">Testimonial</Link>
        </li>
        <li className="font-sans text-base">
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

