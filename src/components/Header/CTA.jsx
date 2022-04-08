import classes from "./Header.module.css";
import CV from "../../assets/MyResume.pdf";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
