import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AllPokemon from './views/AllPokemon'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<AllPokemon />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
