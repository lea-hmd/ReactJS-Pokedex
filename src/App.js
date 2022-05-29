import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AllPokemon from './views/AllPokemon'
import Details from './views/Details'
import AddPokemon from './views/AddPokemon'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PokeContext } from './context/PokeContext'

const blueTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#005d8f',
        },
      },
    },
  },
})

const redTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#c41010',
        },
      },
    },
  },
})

function App() {
  const { pokeState } = React.useContext(PokeContext)

  return (
    <ThemeProvider theme={pokeState.theme === 'light' ? redTheme : blueTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<AllPokemon />} />{' '}
          <Route exact path="/details/:pokemonId" element={<Details />} />
          <Route exact path="/add-pokemon" element={<AddPokemon />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
