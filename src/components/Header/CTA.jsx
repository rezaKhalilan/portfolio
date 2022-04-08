import classes from "./Header.module.css";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href="" download className="btn">
        Download CV
      </a>
      <a href="" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
