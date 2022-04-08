import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <h1 className="centertext">About Me...</h1>
      <div className={classes.about__container}>
        <div className={`${classes.square} ${classes.square__one}`}></div>
        <div className={classes.about}>
          <p>
            I am Reza Khalilan and im 27 and I am a junior front-end developer .
            I got to know coding since the break-out of Covid-19 through the
            FreeCodeCamp.com and little by little i completed the courses .
            Since i have a Bachelors degree on English Translation , it was easy
            for me to persue coding courses from top YouTubers such as
            TraversyMedia , CodeNinja and ... I learned HTML , CSS, JavaScript
            and react.js .<br /> Not going to lie , it was really hard to learn
            all of these stuff as a self learner all by myself but that actually
            shows how dedicated i am to learning new things and how i want to
            reach my goals . I am looking for a company that i can work for and
            I feel that if a manager trust me , i can become one of the best
            employees that they have .
          </p>
        </div>
        <div className={`${classes.square} ${classes.square__two}`}></div>
      </div>
    </section>
  );
};

export default About;
