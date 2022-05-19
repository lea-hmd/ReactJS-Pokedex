import React, { useState } from 'react'
import { Grid, Button, FormControl, TextField } from '@mui/material'
import { PokeContext } from '../context/PokeContext'
import { useNavigate } from 'react-router-dom'

export default function AddPokemon() {
  const { pokeDispatch } = React.useContext(PokeContext)
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    weight: '',
    height: '',
    abilities: [{ ability: { name: '' } }],
    stats: [
      { base_stat: '', stat: { name: 'Hp' } },
      { base_stat: '', stat: { name: 'Attack' } },

      { base_stat: '', stat: { name: 'Defense' } },
    ],
  })

  return (
    <>
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
                    variant="outlined"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        name: e.target.value,
                      })
                    }
                    value={formValues.name}
                    placeholder="Nom du pokémon"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    value={formValues.weight}
                    placeholder="Poids"
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
                    variant="outlined"
                    value={formValues.height}
                    placeholder="Taille"
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
                    variant="outlined"
                    value={formValues.abilities[0].ability.name}
                    placeholder="Abilités"
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
                    variant="outlined"
                    value={formValues.stats[0].base_stat}
                    placeholder="HP"
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
                        ],
                      })
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    value={formValues.stats[1].base_stat}
                    placeholder="Attaque"
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
                    variant="outlined"
                    value={formValues.stats[2].base_stat}
                    placeholder="Défense"
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
          {console.log(formValues)}
          <Grid container justifyContent="right" mt={3} spacing={2}>
            <Grid item>
              <Button
                onClick={() => {
                  pokeDispatch({
                    type: 'addPoke',
                    payload: formValues,
                  })
                  navigate('/')
                }}
                sx={{
                  border: '2px #1c2a38 solid',
                  backgroundColor: '#1c2a38',
                  color: 'white',
                  borderRadius: '2px',
                  '&:hover': { backgroundColor: 'white', color: '#1c2a38' },
                }}
              >
                Ajouter le pokémon
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="/"
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
    </>
  )
}
