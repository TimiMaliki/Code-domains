import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga"
import AppConfig from "../../App.config"
ReactGA.initialize(AppConfig.GA_MEASUREMENT_ID )
const Header = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
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
        <li className="font-sans text-base">
        <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

