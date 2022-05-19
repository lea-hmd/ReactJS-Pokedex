import './style.css'
import { Grid, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import TypeColor from './TypeColor'
import { Link } from 'react-router-dom'
import '../../assets/style.css'

const useStyles = makeStyles({
  card: { borderRadius: '5px', background: '#fff' },
})

export default function PokemonCard({ pokemon }) {
  const classes = useStyles()
  return (
    <Grid item id='pokemonCard' className={classes.card} p={3}>
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
          <img id='pokemonCardImg' src={pokemon.sprites.front_default} alt="" />
        </Grid>
      </Grid>
      <Typography fontFamily="Roboto" className="Card__name" mt={4}>
        {pokemon.name}
      </Typography>
      <Grid container justifyContent="center">
        {pokemon.types.map((type, id) => {
          return (
            <Typography
              color="white"
              borderRadius="3px"
              p={1}
              m={1}
              key={id}
              sx={{
                backgroundColor: TypeColor[type.type.name],
                display: 'inline-block',
                textTransform: 'capitalize',
              }}
            >
              {type.type.name}
            </Typography>
          )
        })}
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Link to={`/details/${pokemon.id}`}>
          <Button
            sx={{
              border: '2px #1c2a38 solid',
              backgroundColor: '#1c2a38',
              color: 'white',
              margin: '10px',
              borderRadius: '2px',
              '&:hover': { backgoundColor: 'white', color: '#1c2a38' },
            }}
          >
            Détails
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}
