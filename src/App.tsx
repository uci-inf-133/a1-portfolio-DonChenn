import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
