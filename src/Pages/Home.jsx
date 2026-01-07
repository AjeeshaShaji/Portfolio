import PersonalDetails from "../Components/PersonalDetails";
import About from "./About";
import Contact from "./Education";
import Education from "./Education";

const Home = () => {
  return (
    <div>
      <PersonalDetails />
      <About/>
      <Education/>
      <Contact/>
    </div>
  );
};

export default Home;
