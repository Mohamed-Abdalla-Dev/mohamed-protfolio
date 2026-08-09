import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";
import HomePage from "./pages/HomePage";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
