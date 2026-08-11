import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/40 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
