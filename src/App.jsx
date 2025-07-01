import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import MainSection from './sections/MainSection'
import ArrowOnTop from './components/ArrowOnTop'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <MainSection />
          <ArrowOnTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
