import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Models from "./pages/Models";
import Designer from "./pages/Designer";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Tickets from "./pages/Tickets";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/models" element={<Models />} />
      <Route path="/designer" element={<Designer />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/events" element={<Events />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;