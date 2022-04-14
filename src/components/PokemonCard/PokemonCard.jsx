import './style.css'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  card: { borderRadius: '5px', background: '#fff' },
})

export default function PokemonCard({ pokemon }) {
  const classes = useStyles()
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
    </Grid>
  )
}
