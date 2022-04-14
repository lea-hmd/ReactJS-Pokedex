import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import { getAllPokemon, getPokemon } from '../services/usePokeApi'
import Header from '../components/Common/Header'
import { PokeContext } from '../context/PokeContext'

function Layout() {
    const [nextUrl, setNextUrl] = useState('')
    const [previousUrl, setPreviousUrl] = useState('')
    const [setLoading] = useState(true)
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
    const { pokeState, pokeDispatch } = React.useContext(PokeContext)

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setLoading, pokeDispatch])

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async (pokemon) => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord
            })
        )

        pokeDispatch({ type: 'storePoke', payload: _pokemonData })
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
                    {pokeState.pokedex.map((pokemon, i) => {
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
