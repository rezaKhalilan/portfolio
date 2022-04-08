import projectsData from "../../projectsData";
import Project from "./Project";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="centertext">Projects</h1>
      <div className={classes.projects__container}>
        {projectsData.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
