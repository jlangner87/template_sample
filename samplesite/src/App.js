import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Resume from './pages/resume'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
