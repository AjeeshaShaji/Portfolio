import PersonalDetails from "../Components/PersonalDetails";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <div className="p-10 min-h-screen bg-[#2b2b2b] ">
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
    </div>
      
    </>
  );
};

export default Home;
