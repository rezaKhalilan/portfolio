import CTA from "./CTA";
import classes from "./Header.module.css";
import ME from "../../pic.png";
import COVER from "../../cover.png";
import HeaderSocials from "./HeaderSocials";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={`container ${classes.header__container}`}>
        <h5>Hello , I am</h5>
        <h1>Reza Khalilan</h1>
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Montserrat",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
          startDelay={1000}
          cursorColor="gray"
          text="Front-end Developer"
          typeSpeed={150}
        />
        <CTA />
        <HeaderSocials />

        <div className={classes.me}>
          <img src={ME} alt="" />
          <Tippy content="You can drag me">
            <div className={classes.cover}>
              <motion.img
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                src={COVER}
                alt=""
              />
            </div>
          </Tippy>
        </div>

        <a href="#contactMe" className={classes.scroll}>
          SCROLL DOWN
        </a>
      </div>
    </section>
  );
};

export default Header;
