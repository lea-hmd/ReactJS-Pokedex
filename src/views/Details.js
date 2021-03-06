import { Grid } from '@mui/material'
import { Typography, Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'
import TypeColor from '../components/PokemonCard/TypeColor'
import '../assets/style.css'
import ModalForm from '../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'

export default function Details() {
  const { pokemonId } = useParams()

  const { pokeState, pokeDispatch } = React.useContext(PokeContext)
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const [thisPokemon, setThisPokemon] = React.useState(null)

  React.useEffect(() => {
    let tempPokedex =
      pokeState.customPokedex.length > 0
        ? pokeState.customPokedex
        : pokeState.pokedex

    setThisPokemon(tempPokedex.find((pokemon) => +pokemon.id === +pokemonId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeState.customPokedex])

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          container
          sx={{ background: 'white', borderRadius: '5px' }}
          lg={9}
          xs={10}
          pb={5}
        >
          <Grid container m="auto" item xs={10} md={11}>
            <Grid container justifyContent={'center'} mb={5}>
              <Typography
                variant="h2"
                textTransform="capitalize"
                textAlign="center"
                fontFamily="Pokemon"
                color={pokeState.theme === 'light' ? '#005d8f' : '#c41010'}
              >
                {thisPokemon?.name}
              </Typography>
            </Grid>
            <Grid item lg={5} container alignItems="center">
              <Grid
                container
                justifyContent="center "
                backgroundColor={
                  pokeState.theme === 'light' ? '#005d8f' : '#c41010'
                }
                sx={{
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
                    Face ant??rieure
                  </Typography>
                  <Grid container justifyContent="center">
                    {thisPokemon && (
                      <img
                        id="pokemonImg"
                        src={thisPokemon?.sprites.front_default}
                        alt=""
                      />
                    )}
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
                    Face post??rieure
                  </Typography>
                  <Grid container justifyContent="center">
                    {thisPokemon && (
                      <img
                        id="pokemonImg"
                        src={thisPokemon?.sprites.back_default}
                        alt=""
                      />
                    )}
                  </Grid>
                </Grid>{' '}
              </Grid>
              <Grid
                container
                justifyContent="center"
                backgroundColor={
                  pokeState.theme === 'light' ? '#005d8f' : '#c41010'
                }
                sx={{
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
                    Face ant??rieure - Shiny
                  </Typography>
                  <Grid container justifyContent="center">
                    {thisPokemon && (
                      <img
                        id="pokemonImg"
                        src={thisPokemon?.sprites.front_shiny}
                        alt=""
                      />
                    )}
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
                    Face post??rieure - Shiny
                  </Typography>
                  <Grid container justifyContent="center">
                    {thisPokemon && (
                      <img
                        id="pokemonImg"
                        src={thisPokemon?.sprites.back_shiny}
                        alt=""
                      />
                    )}
                  </Grid>
                </Grid>{' '}
              </Grid>
            </Grid>
            <Grid container item lg={7}>
              <Grid container item xs={12} lg={10} m="auto">
                <Typography variant="h6" textTransform="capitalize" mt={2}>
                  G??n??ral :
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
                        Abilit??s :
                      </Typography>
                      {thisPokemon?.abilities.map(({ ability }) => {
                        return (
                          <Grid item mr={2} key={ability.name}>
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
                        {thisPokemon?.weight / 10 + ' kg'}
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
                        {thisPokemon?.height * 10 + ' cm'}
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
                      {thisPokemon?.types &&
                        thisPokemon?.types.map((type) => {
                          return (
                            <Typography
                              color="white"
                              borderRadius="3px"
                              p={0.5}
                              m={1}
                              key={type.type.name}
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
              <Grid container item xs={12} lg={10} m="auto">
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
                  {thisPokemon?.stats.map(({ stat, base_stat: nb }) => {
                    return (
                      <Grid item xs={4} key={stat.name}>
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
            <Grid container justifyContent="left" mt={2}>
              <Button
                onClick={() => {
                  handleOpen()
                }}
                sx={{
                  border: '2px #1c2a38 solid',
                  backgroundColor: '#1c2a38',
                  color: 'white',
                  margin: '10px',
                  borderRadius: '2px',
                  '&:hover': { background: 'white', color: '#1c2a38' },
                }}
              >
                Modifier
              </Button>
              <Button
                onClick={() => {
                  pokeDispatch({ type: 'delPoke', payload: thisPokemon?.id })
                  navigate('/')
                }}
                sx={{
                  border: '2px #ff1f1f solid',
                  backgroundColor: '#ff1f1f',
                  color: 'white',
                  margin: '10px',
                  borderRadius: '2px',
                  '&:hover': { background: 'white', color: '#1c2a38' },
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
          {open && <ModalForm open={open} handleClose={handleClose} />}
        </Grid>
      </Grid>
    </>
  )
}
