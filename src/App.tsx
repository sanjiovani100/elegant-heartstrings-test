import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App