import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import DublinVision from './pages/DublinVision'
import Portfolio from './pages/Portfolio'
import ActionPlan from './pages/ActionPlan'
import DublinResearch from './pages/DublinResearch'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/dublin-vision" element={<DublinVision />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/competencies" element={<ActionPlan />} />
          <Route path="/dublin-research" element={<DublinResearch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App