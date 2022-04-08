import classes from "./Header.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className={classes.socials}>
      <a href="https://www.linkedin.com/in/reza-kh-87a61b236/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/rezaKhalilan">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
