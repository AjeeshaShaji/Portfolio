import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import PersonalDetails from "./Components/PersonalDetails";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
