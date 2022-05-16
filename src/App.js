import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AllPokemon from './views/AllPokemon'
import Details from './views/Details'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<AllPokemon />} />{' '}
        <Route exact path="/details/:pokemonId" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
