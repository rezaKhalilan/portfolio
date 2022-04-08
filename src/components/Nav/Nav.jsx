import { useState } from "react";
import classes from "./Nav.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className={classes.nav}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? classes.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? classes.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        onClick={() => setActiveNav("#experiences")}
        className={activeNav === "#experiences" ? classes.active : ""}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? classes.active : ""}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#contactMe"
        onClick={() => setActiveNav("#contactMe")}
        className={activeNav === "#contactMe" ? classes.active : ""}
      >
        <MdOutlineContactSupport />
      </a>
    </nav>
  );
};

export default Nav;
