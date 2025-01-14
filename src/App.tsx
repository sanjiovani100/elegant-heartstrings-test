import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Models from "@/pages/Models";
import Roadmap from "@/pages/Roadmap";
import Changelog from "@/pages/Changelog";
import Sponsors from "@/pages/Sponsors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/models" element={<Models />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}

export default App;