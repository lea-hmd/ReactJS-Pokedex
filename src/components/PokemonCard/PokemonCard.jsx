import './style.css'
import { Grid, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { PokeContext } from '../../context/PokeContext'
import React from 'react'
import TypeColor from './TypeColor'

const useStyles = makeStyles({
  card: { borderRadius: '5px', background: '#fff' },
})

export default function PokemonCard({ pokemon }) {
  const classes = useStyles()
  const { pokeDispatch } = React.useContext(PokeContext)
  return (
    <Grid item className={classes.card} p={3}>
      <Grid
        container
        justifyContent="center"
        sx={{
          backgroundColor: '#1c2a38',
          borderRadius: '5px',
          padding: '25px 0px',
        }}
      >
        <Grid container justifyContent="center">
          <img src={pokemon.sprites.front_default} alt="" />
        </Grid>
      </Grid>
      <Typography fontFamily="Roboto" className="Card__name" mt={4}>
        {pokemon.name}
      </Typography>
      <Grid container justifyContent="center">
        {pokemon.types.map((type) => {
          return (
            <Typography
              color="white"
              borderRadius="3px"
              p={1}
              m={1}
              sx={{
                backgroundColor: TypeColor[type.type.name],
                display: 'inline-block',
              }}
            >
              {type.type.name}
            </Typography>
          )
        })}
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Button
          onClick={() => pokeDispatch({ type: 'delPoke', payload: pokemon.id })}
          sx={{
            border: '2px #1c2a38 solid',
            color: '#1c2a38',
            margin: '10px',
            borderRadius: '2px',
          }}
        >
          Supprimer le pokémon
        </Button>
      </Grid>
    </Grid>
  )
}
