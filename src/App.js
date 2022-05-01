// Import Styles
import './App.css';

// Component Imports
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Socials from './components/socials/Socials';

function App() {
  return (
    <div className='App'>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
