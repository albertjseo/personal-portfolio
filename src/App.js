import './App.css';
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publications from './components/Publications'
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
