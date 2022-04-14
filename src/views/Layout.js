import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import { getAllPokemon, getPokemon } from '../services/usePokeApi'
import Header from '../components/Common/Header'

function Layout() {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [previousUrl, setPreviousUrl] = useState('')
    const [setLoading] = useState(true)
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
    }, [setLoading])

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async (pokemon) => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord
            })
        )

        setPokemonData(_pokemonData)
    }
    const next = async () => {
        setLoading(true)
        let data = await getAllPokemon(nextUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPreviousUrl(data.previous)
        setLoading(false)
    }

    const prev = async () => {
        if (!previousUrl) return
        setLoading(true)
        let data = await getAllPokemon(previousUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPreviousUrl(data.previous)
        setLoading(false)
    }
    return (
        <>
            <Header />
            <Grid container justifyContent="center" alignItems="center">
                <Grid container item xs={10}>
                    {pokemonData.map((pokemon, i) => {
                        return (
                            <Grid item xs={4} key={i}>
                                <PokemonCard pokemon={pokemon} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>

            <div className="btn">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </>
    )
}

export default Layout
