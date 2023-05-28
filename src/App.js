import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/portfolio" />
        <Route path="/contact" />
        <Route path="/resume" />
      </Routes>
    </Router>
  );
}

export default App;
