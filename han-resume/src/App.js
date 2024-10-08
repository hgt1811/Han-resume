// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { GlobalStyles } from './globalStyles';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;


