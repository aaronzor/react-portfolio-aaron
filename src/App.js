// Import Styles
import './App.css';

// Component Imports
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className='App'>
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
