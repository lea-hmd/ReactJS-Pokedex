import React, { useState, useEffect } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import { getAllPokemon, getPokemon } from '../services/usePokeApi'

export default function AllPokemon() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [previousUrl, setPreviousUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl)
      setNextUrl(response.next)
      setPreviousUrl(response.previous)
      let pokemon = await loadingPokemon(response.results)
      console.log(pokemon)
      setLoading(false)
    }
    fetchData()
  }, [])

  const nextData = async () => {
    setLoading(true)
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPreviousUrl(data.previous)
    setLoading(false)
  }

  const previousData = async () => {
    if (!previousUrl) return
    setLoading(true)
    let data = await getAllPokemon(previousUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPreviousUrl(data.previous)
    setLoading(false)
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url)
        return pokemonRecord
      })
    )
    setPokemonData(_pokemonData)
  }
  return (
    <>
      {loading ? (
        <Typography variant="h5" color="white" textAlign="center">
          Chargement en cours ...
        </Typography>
      ) : (
        <>
          <Grid container justifyContent="center" alignItems="center" mt={5}>
            <Grid
              container
              spacing={4}
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={8}
            >
              {pokemonData.map((pokemon, i) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                    <PokemonCard pokemon={pokemon} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={4}>
            <Button
              onClick={nextData}
              sx={{ border: '2px white solid', color: 'white', margin: '10px' }}
            >
              Pokémon précédents
            </Button>
            <Button
              onClick={previousData}
              sx={{ border: '2px white solid', color: 'white', margin: '10px' }}
            >
              Pokémon suivants
            </Button>
          </Grid>
        </>
      )}
    </>
  )
}
