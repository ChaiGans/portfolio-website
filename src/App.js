import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <About id="about"></About>
      <Experiences id="experiences"></Experiences>
      <Projects id="projects"></Projects>
      <Skills id="skills"></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
