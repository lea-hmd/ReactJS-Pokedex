import { Grid } from '@mui/material'
import { Typography, Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'
import TypeColor from '../components/PokemonCard/TypeColor'

export default function Details() {
  const { pokemonId } = useParams()

  const { pokeState, pokeDispatch } = React.useContext(PokeContext)

  const [render, setRender] = React.useState(null)
  React.useEffect(() => {
    const thisPokemon = pokeState.pokedex.find(
      (pokemon) => pokemon.id === +pokemonId
    )
    setRender(
      <>
        <Grid container justifyContent="center" alignItems="center">
          {' '}
          <Grid
            item
            container
            sx={{ background: 'white', borderRadius: '5px' }}
            lg={9}
            xs={10}
            p={5}
          >
            <Grid container justifyContent={'center'} mb={5}>
              <Typography
                variant="h3"
                textTransform="capitalize"
                textAlign="center"
              >
                {thisPokemon.name}
              </Typography>
            </Grid>
            <Grid item lg={5} container alignItems="center">
              <Grid
                container
                justifyContent="center"
                sx={{
                  backgroundColor: '#1c2a38',
                  borderRadius: '5px',
                  padding: '25px 0px',
                }}
                m={1}
                item
              >
                <Grid
                  item
                  xs={6}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="body2" color="white" fontWeight="bold">
                    Face antérieure
                  </Typography>
                  <Grid container justifyContent="center">
                    <img src={thisPokemon.sprites.front_default} alt="" />
                  </Grid>
                </Grid>
                <Grid
                  xs={6}
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="body2" color="white" fontWeight="bold">
                    Face postérieure
                  </Typography>
                  <Grid container justifyContent="center">
                    <img src={thisPokemon.sprites.back_default} alt="" />
                  </Grid>
                </Grid>{' '}
              </Grid>
              <Grid
                container
                justifyContent="center"
                sx={{
                  backgroundColor: '#1c2a38',
                  borderRadius: '5px',
                  padding: '25px 0px',
                }}
                item
                m={1}
              >
                <Grid
                  xs={6}
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="body2" color="white" fontWeight="bold">
                    Face antérieure - Shiny
                  </Typography>
                  <Grid container justifyContent="center">
                    <img src={thisPokemon.sprites.front_shiny} alt="" />
                  </Grid>
                </Grid>
                <Grid
                  xs={6}
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="body2" color="white" fontWeight="bold">
                    Face postérieure - Shiny
                  </Typography>
                  <Grid container justifyContent="center">
                    <img src={thisPokemon.sprites.back_shiny} alt="" />
                  </Grid>
                </Grid>{' '}
              </Grid>
            </Grid>
            <Grid item lg={7}>
              <Grid item xs={10} m="auto">
                <Typography variant="h6" textTransform="capitalize" mt={2}>
                  Général :
                </Typography>
                <Grid
                  item
                  mt={1}
                  p={2}
                  container
                  sx={{ background: '#f2f5f7', borderRadius: '5px' }}
                >
                  {' '}
                  <Grid container spacing={5}>
                    {' '}
                    <Grid item>
                      <Typography
                        variant="body2"
                        textTransform="capitalize"
                        mr={1}
                      >
                        Abilités :
                      </Typography>
                      {thisPokemon.abilities.map(({ ability, id }) => {
                        return (
                          <Grid item mr={2} key={id}>
                            <Typography
                              variant="body2"
                              textTransform="capitalize"
                              color="blue"
                            >
                              {ability.name}
                            </Typography>
                          </Grid>
                        )
                      })}
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        textTransform="capitalize"
                        mr={1}
                      >
                        Poids :
                      </Typography>
                      <Typography
                        variant="body2"
                        textTransform="capitalize"
                        mr={1}
                      >
                        {thisPokemon.weight / 10 + ' kg'}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        textTransform="capitalize"
                        mr={1}
                      >
                        Taille :
                      </Typography>
                      <Typography
                        variant="body2"
                        textTransform="capitalize"
                        mr={1}
                      >
                        {thisPokemon.height * 10 + ' cm'}
                      </Typography>
                    </Grid>{' '}
                    <Grid item>
                      <Typography
                        variant="body2"
                        textTransform="capitalize"
                        mr={1}
                      >
                        Type :
                      </Typography>
                      {thisPokemon.types.map((type, id) => {
                        return (
                          <Typography
                            color="white"
                            borderRadius="3px"
                            p={0.5}
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
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={10} m="auto">
                <Typography variant="h6" textTransform="capitalize" mt={2}>
                  Statistiques :
                </Typography>
                <Grid
                  item
                  mt={1}
                  p={2}
                  container
                  sx={{ background: '#f2f5f7', borderRadius: '5px' }}
                >
                  {thisPokemon.stats.map(({ id, stat, base_stat: nb }) => {
                    return (
                      <Grid item xs={4} key={id}>
                        <Typography
                          variant="body2"
                          textTransform="capitalize"
                          mt={1}
                        >
                          {stat.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          textTransform="capitalize"
                          mt={1}
                          fontWeight="bold"
                          color="red"
                        >
                          {nb}
                        </Typography>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="left">
              <Button
                href="/"
                sx={{
                  border: '2px #1c2a38 solid',
                  backgroundColor: '#1c2a38',
                  color: 'white',
                  margin: '10px',
                  borderRadius: '2px',
                  '&:hover': { backgoundColor: 'white', color: '#1c2a38' },
                }}
              >
                Modifier
              </Button>{' '}
              <Button
                onClick={() =>
                  pokeDispatch({ type: 'delPoke', payload: thisPokemon.id })
                }
                sx={{
                  border: '2px #ff1f1f solid',
                  backgroundColor: '#ff1f1f',
                  color: 'white',
                  margin: '10px',
                  borderRadius: '2px',
                  '&:hover': { backgoundColor: 'white', color: '#1c2a38' },
                }}
              >
                Supprimer
              </Button>
            </Grid>
            <Grid container justifyContent="right">
              <Button
                href="/"
                sx={{
                  border: '2px #1c2a38 solid',
                  color: '#1c2a38',
                  backgroundColor: 'white',
                  margin: '10px',
                  borderRadius: '2px',
                }}
              >
                Retour
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>{render}</>
}
