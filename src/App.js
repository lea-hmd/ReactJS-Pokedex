import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AllPokemon from './views/AllPokemon'
import Details from './views/Details'
import AddPokemon from './views/AddPokemon'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<AllPokemon />} />{' '}
        <Route exact path="/details/:pokemonId" element={<Details />} />{' '}
        <Route exact path="/add-pokemon" element={<AddPokemon />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
