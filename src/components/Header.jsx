import React, { useState } from "react";
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (

    <nav className="w-full bg-black justify-between text-center items-center p-8 sticky">
      <h1>Maliki</h1>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base">
          <a href="">Home</a>
        </li>
        <li className="font-sans text-base">
          <a href="">Portfolio</a>
        </li>
        <li className="font-sans text-base">
          <a href="">About Us</a>
        </li>
        <li className="font-sans text-base">
          <a href="">Testimonial</a>
        </li>
        <li className="font-sans text-base">
          <a href="">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <Flex
//       as="nav"
//       p="20px"
//       alignItems="center"
//       textAlign="center"
//       justify="space-between"
//       position="sticky"
//       zIndex="7"
//     >
//       <Heading as="h1" cursor="pointer">
//         EaziExchange
//       </Heading>

// <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//   <span></span>
//   <span></span>
//   <span></span>
// </div>

{
  /* <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">FAQs</a>
        </li>
      </ul>
      

  */
}

//     </Flex>
//   );
// };

// export default Navbar;
