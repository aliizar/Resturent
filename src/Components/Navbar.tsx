import { useState } from "react";

import LowerNav from "./LowerNav";
import UpperNav from "./UpperNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const toggleMenu = ()  => {
    setIsOpen(!isOpen);
  
  };

  return (
    <>
      <header>
       
        <UpperNav isOpen={isOpen} toggleMenu={toggleMenu} />
        <LowerNav isLoaded={isLoaded} setisLoaded={setisLoaded} />
      </header>
    </>
  );
};

export default Navbar;
