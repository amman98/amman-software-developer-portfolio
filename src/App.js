import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" />
        <Route path="/resume" />
      </Routes>
    </Router>
  );
}

export default App;
