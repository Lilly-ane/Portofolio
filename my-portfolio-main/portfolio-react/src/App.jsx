import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import SplashCursor from "./Components/SplashCursor";
import TechStack from "./Components/TechStack/TechStack";

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <SplashCursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <section id="techstack">
                <TechStack />
              </section>

              <MyWork />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/project/:id" element={<ProjectCard />} />
      </Routes>
    </div>
  );
};

export default App;
