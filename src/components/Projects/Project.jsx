import classes from "./Projects.module.css";

const Project = ({ item }) => {
  return (
    <div className={classes.project}>
      <img src={item.image} alt="project" />
      <div className={classes.btn__container}>
        <button className={classes.git}>
          <a href={item.git}>Github</a>
        </button>
        <button className={classes.url}>
          <a href={item.url}>Live Demo</a>
        </button>
      </div>
    </div>
  );
};

export default Project;
