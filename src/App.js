// Import Styles
import './App.css';

// Component Imports
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Socials from './components/socials/Socials';
import Footer from './components/footer/Footer';
import TopButton from './components/topButton/TopButton';

function App() {
  return (
    <div className='App'>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Socials />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
