import './style.css'
import { Grid, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import TypeColor from './TypeColor'
import { useNavigate } from 'react-router-dom'
import '../../assets/style.css'
import { PokeContext } from '../../context/PokeContext'

const useStyles = makeStyles({
  card: { borderRadius: '5px', background: '#fff' },
})

export default function PokemonCard({ pokemon }) {
  const classes = useStyles()
  const { pokeState } = React.useContext(PokeContext)
  const navigate = useNavigate()
  return (
    <Grid
      item
      id={pokeState.theme === 'light' ? 'blueCard' : 'redCard'}
      className={classes.card}
      p={3}
    >
      <Grid
        container
        justifyContent="center"
        backgroundColor={pokeState.theme === 'light' ? '#005d8f' : '#c41010'}
        sx={{
          borderRadius: '5px',
          padding: '25px 0px',
        }}
      >
        <Grid container justifyContent="center">
          <img
            width="50%"
            id="pokemonCardImg"
            src={pokemon.sprites.front_default}
            alt=""
          />
        </Grid>
      </Grid>
      <Typography fontFamily="Roboto" className="Card__name" mt={4}>
        {pokemon.name}
      </Typography>
      <Grid container justifyContent="center">
        {pokemon?.types &&
          pokemon.types.map((type, id) => {
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
        <Button
          onClick={() => navigate(`/details/${pokemon.id}`)}
          sx={{
            border: '2px #1c2a38 solid',
            backgroundColor: '#1c2a38',
            color: 'white',
            margin: '10px',
            borderRadius: '2px',
            '&:hover': {
              backgroundColor: 'white',
              color: '#1c2a38',
            },
          }}
        >
          D??tails
        </Button>
      </Grid>
    </Grid>
  )
}
