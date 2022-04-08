import Card from "../Card";
import classes from "./Experiences.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Experiences = () => {
  return (
    <section id="experiences">
      <h1 className="centertext">Experiences</h1>
      <div className={classes.experience}>
        <Card>
          <h3>HTML</h3>
          <CircularProgressbar value={80} text={`80%`} />
        </Card>
        <Card>
          <h3>CSS</h3>
          <CircularProgressbar value={80} text={`80%`} />
        </Card>
        <Card>
          <h3>JavaScript</h3>
          <CircularProgressbar value={60} text={`60%`} />
        </Card>
        <Card>
          <h3>React.js</h3>
          <CircularProgressbar value={65} text={`65%`} />
        </Card>
      </div>
      <div className={classes.experience}>
        <Card>
          <h3>Eng Speaking</h3>
          <CircularProgressbar value={90} text={`90%`} />
        </Card>
        <Card>
          <h3>Eng Listening</h3>
          <CircularProgressbar value={90} text={`90%`} />
        </Card>
        <Card>
          <h3>Eng Writing</h3>
          <CircularProgressbar value={80} text={`80%`} />
        </Card>
        <Card>
          <h3>Eng Reading</h3>
          <CircularProgressbar value={90} text={`90%`} />
        </Card>
      </div>
    </section>
  );
};

export default Experiences;
