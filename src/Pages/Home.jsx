import PersonalDetails from "../Components/PersonalDetails";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Skills from "./skills";

const Home = () => {
  return (
    <>
    <div className="p-10 min-h-screen bg-[#3a3a3a] ">
    <section id="about">
        <PersonalDetails />
      </section>

    <section id="skills">
      <Skills/>
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
    </div>
      
    </>
  );
};

export default Home;
