import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './views/Layout'

function App() {
    return (
        <Router>
            <Layout></Layout>
        </Router>
    )
}

export default App
