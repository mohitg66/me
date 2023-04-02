import { BrowserRouter } from "react-router-dom";
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App= () => {
  return (  
    <BrowserRouter>
      <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App;
