import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/portfolio" />
        <Route path="/contact" />
        <Route path="/resume" />
      </Routes>
    </Router>
  );
}

export default App;
