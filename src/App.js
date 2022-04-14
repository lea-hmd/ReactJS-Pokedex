import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './views/Layout'
import Navigation from './components/Common/Navigation'
import AllPokemon from './views/AllPokemon'
import Details from './views/Details'

function App() {
    return (
        <>
            <Layout />
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/AllPokemon" element={<AllPokemon />} />
                    <Route exact path="/Details" element={<Details />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
