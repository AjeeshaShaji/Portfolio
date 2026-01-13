import PersonalDetails from "../Components/PersonalDetails";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id="about">
        <PersonalDetails />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
