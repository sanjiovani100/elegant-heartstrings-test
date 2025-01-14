import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Models from "@/pages/Models";
import Roadmap from "@/pages/Roadmap";
import Changelog from "@/pages/Changelog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/models" element={<Models />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </Router>
  );
}

export default App;