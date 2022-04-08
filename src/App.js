import pic from "./pic.png";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
