import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Models from "@/pages/Models";
import Designer from "@/pages/Designer";
import Events from "@/pages/Events";
import Roadmap from "@/pages/Roadmap";
import Changelog from "@/pages/Changelog";
import Sponsors from "@/pages/Sponsors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/models" element={<Models />} />
      <Route path="/designer" element={<Designer />} />
      <Route path="/events" element={<Events />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}

export default App;