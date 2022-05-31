import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { PokeContext } from '../../context/PokeContext'
import React, { useState } from 'react'
import { Grid, Button, FormControl, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'

function ModalForm(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const { pokemonId } = useParams()
  const { pokeDispatch, pokeState } = React.useContext(PokeContext)
  const [thisPokemon, setThisPokemon] = React.useState(null)
  const [formValues, setFormValues] = useState(null)

  React.useEffect(() => {
    const data =
      pokeState.customPokedex.length === 0
        ? pokeState.pokedex
        : pokeState.customPokedex
    let poke = data.find((pokemon) => +pokemon.id === +pokemonId)

    setThisPokemon(poke)
    setFormValues({
      id: pokemonId,
      name: poke.name,
      weight: poke.weight,
      height: poke.height,
      abilities: [{ ability: { name: poke.abilities[0].ability.name } }],
      stats: [
        { base_stat: poke.stats[0].base_stat, stat: { name: 'Hp' } },
        { base_stat: poke.stats[1].base_stat, stat: { name: 'Attack' } },
        { base_stat: poke.stats[2].base_stat, stat: { name: 'Defense' } },
        {
          base_stat: poke.stats[3]?.base_stat,
          stat: { name: 'special-attack' },
        },
        {
          base_stat: poke.stats[4]?.base_stat,
          stat: { name: 'special-defense' },
        },
        { base_stat: poke.stats[5]?.base_stat, stat: { name: 'speed' } },
      ],
      sprites: {
        back_default: poke.sprites.back_default,
        front_default: poke.sprites.front_default,
        back_shiny: poke.sprites.back_shiny,
        front_shiny: poke.sprites.front_shiny,
      },
      types: poke.types,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            container
            sx={{ background: 'white', borderRadius: '5px' }}
            lg={9}
            xs={10}
            p={5}
          >
            <Grid container item>
              <FormControl fullWidth>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      label="Nom du Pokemon"
                      variant="outlined"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          name: e.target.value,
                        })
                      }
                      value={formValues?.name}
                      placeholder={thisPokemon?.name}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Poids du Pokemon"
                      variant="outlined"
                      value={formValues?.weight}
                      placeholder={thisPokemon?.weight}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          weight: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Taille du Pokemon"
                      variant="outlined"
                      value={formValues?.height}
                      placeholder={thisPokemon?.height}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          height: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Abilité du Pokemon"
                      variant="outlined"
                      value={formValues && formValues.abilities[0].ability.name}
                      placeholder={thisPokemon?.abilities[0].ability.name}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          abilities: [{ ability: { name: e.target.value } }],
                        })
                      }
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      label="HP du Pokemon"
                      variant="outlined"
                      value={formValues?.stats[0].base_stat}
                      placeholder={thisPokemon?.stats[0].base_stat}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          stats: [
                            { base_stat: e.target.value, stat: { name: 'Hp' } },
                            {
                              base_stat: formValues.stats[1].base_stat,
                              stat: { name: 'Attack' },
                            },

                            {
                              base_stat: formValues.stats[2].base_stat,
                              stat: { name: 'Defense' },
                            },
                            {
                              base_stat: formValues.stats[3].base_stat,
                              stat: { name: 'special-attack' },
                            },
                            {
                              base_stat: formValues.stats[4].base_stat,
                              stat: { name: 'special-defense' },
                            },
                            {
                              base_stat: formValues.stats[5].base_stat,
                              stat: { name: 'speed' },
                            },
                          ],
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Attaque du Pokemon"
                      variant="outlined"
                      value={formValues?.stats[1].base_stat}
                      placeholder={thisPokemon?.stats[1].base_stat}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          stats: [
                            {
                              base_stat: formValues.stats[0].base_stat,
                              stat: { name: 'Hp' },
                            },
                            {
                              base_stat: e.target.value,
                              stat: { name: 'Attack' },
                            },

                            {
                              base_stat: formValues.stats[2].base_stat,
                              stat: { name: 'Defense' },
                            },
                          ],
                        })
                      }
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Défense du Pokemon"
                      variant="outlined"
                      value={formValues?.stats[2].base_stat}
                      placeholder={thisPokemon?.stats[2].base_stat}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          stats: [
                            {
                              base_stat: formValues.stats[0].base_stat,
                              stat: { name: 'Hp' },
                            },
                            {
                              base_stat: formValues.stats[1].base_stat,
                              stat: { name: 'Attack' },
                            },

                            {
                              base_stat: e.target.value,
                              stat: { name: 'Defense' },
                            },
                          ],
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid container justifyContent="right" mt={3} spacing={2}>
              <Grid item>
                <Button
                  onClick={() => {
                    pokeDispatch({
                      type: 'upPoke',
                      payload: formValues,
                    })
                    props.handleClose()
                  }}
                  sx={{
                    border: '2px #1c2a38 solid',
                    backgroundColor: '#1c2a38',
                    color: 'white',
                    borderRadius: '2px',
                    '&:hover': { backgroundColor: 'white', color: '#1c2a38' },
                  }}
                >
                  Valider
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    props.handleClose()
                  }}
                  sx={{
                    border: '2px #1c2a38 solid',
                    color: '#1c2a38',
                    backgroundColor: 'white',
                    borderRadius: '2px',
                  }}
                >
                  Retour
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default ModalForm
