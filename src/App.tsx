import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Models from "./pages/Models";
import Designer from "./pages/Designer";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Tickets from "./pages/Tickets";
import Roadmap from "./pages/Roadmap";
import Changelog from "./pages/Changelog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/models" element={<Models />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </Router>
  );
}

export default App;