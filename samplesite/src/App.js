import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Services from './pages/services'
import Project1 from './pages/project pages/project1'
import Project2 from './pages/project pages/project2'
import Project3 from './pages/project pages/project3'
import Project4 from './pages/project pages/project4'
import Project5 from './pages/project pages/project5'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/1" element={<Project1 />} />
        <Route path="/portfolio/2" element={<Project2 />} />
        <Route path="/portfolio/3" element={<Project3 />} />
        <Route path="/portfolio/4" element={<Project4 />} />
        <Route path="/portfolio/5" element={<Project5 />} />
      </Routes>
    </div>
  )
}

export default App
