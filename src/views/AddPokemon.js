import React, { useState } from 'react'
import {
  Grid,
  Button,
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from '@mui/material'
import { PokeContext } from '../context/PokeContext'
import { useNavigate } from 'react-router-dom'

export default function AddPokemon() {
  const { pokeDispatch } = React.useContext(PokeContext)
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    weight: '',
    height: '',
    abilities: [{ ability: { name: '' } }, { ability: { name: '' } }],
    stats: [
      { base_stat: '', stat: { name: 'Hp' } },
      { base_stat: '', stat: { name: 'Attack' } },
      { base_stat: '', stat: { name: 'Defense' } },
    ],
    sprites: {
      back_default: '',
      back_shiny: '',
      front_default: '',
      front_shiny: '',
    },
    types: [
      { slot: 1, type: { name: '' } },
      { slot: 2, type: { name: '' } },
      { slot: 3, type: { name: '' } },
    ],
  })

  const pokeTypes = [
    'bug',
    'dragon',
    'fairy',
    'fire',
    'ghost',
    'ground',
    'normal',
    'psychic',
    'steel',
    'dark',
    'electric',
    'fighting',
    'flying',
    'grass',
    'ice',
    'poison',
    'rock',
    'water',
  ]

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
                <Grid item xs={2}>
                  <FormControl fullWidth>
                    <InputLabel required>Type 1</InputLabel>
                    <Select
                      placeholder="Type 1"
                      label="Type 1"
                      fullWidth
                      required
                      value={formValues.types[0].type.name}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          types: [
                            { slot: 1, type: { name: e.target.value } },
                            {
                              slot: 2,
                              type: { name: formValues.types[1].type.name },
                            },
                            {
                              slot: 3,
                              type: { name: formValues.types[2].type.name },
                            },
                          ],
                        })
                      }
                      input={<OutlinedInput placeholder="Type" label="Type" />}
                    >
                      <MenuItem key={1} value={''}>
                        Choisir un type
                      </MenuItem>
                      {pokeTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <FormControl fullWidth>
                    <InputLabel>Type 2</InputLabel>
                    <Select
                      placeholder="Type 2"
                      label="Type 2"
                      fullWidth
                      value={formValues.types[1].type.name}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          types: [
                            {
                              slot: 1,
                              type: { name: formValues.types[0].type.name },
                            },
                            {
                              slot: 2,
                              type: { name: e.target.value },
                            },
                            {
                              slot: 3,
                              type: { name: formValues.types[2].type.name },
                            },
                          ],
                        })
                      }
                      input={<OutlinedInput placeholder="Type" label="Type" />}
                    >
                      <MenuItem key={1} value={''}>
                        Choisir un type
                      </MenuItem>
                      {pokeTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>{' '}
                <Grid item xs={2}>
                  <FormControl fullWidth>
                    <InputLabel>Type 3</InputLabel>
                    <Select
                      placeholder="Type 3"
                      label="Type 3"
                      fullWidth
                      value={formValues.types[2].type.name}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          types: [
                            {
                              slot: 1,
                              type: { name: formValues.types[0].type.name },
                            },
                            {
                              slot: 2,
                              type: { name: formValues.types[1].type.name },
                            },
                            {
                              slot: 3,
                              type: { name: e.target.value },
                            },
                          ],
                        })
                      }
                      input={<OutlinedInput placeholder="Type" label="Type" />}
                    >
                      <MenuItem key={1} value={''}>
                        Choisir un type
                      </MenuItem>
                      {pokeTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    required
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
                    required
                    variant="outlined"
                    value={formValues.weight}
                    type="number"
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
                    required
                    variant="outlined"
                    value={formValues.height}
                    type="number"
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
                    required
                    variant="outlined"
                    value={formValues.abilities[0].ability.name}
                    placeholder="Abilité 1"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        abilities: [
                          {
                            ability: {
                              name: e.target.value,
                            },
                          },
                          {
                            ability: {
                              name: formValues.abilities[0].ability.name,
                            },
                          },
                        ],
                      })
                    }
                  />
                </Grid>{' '}
                <Grid item>
                  <TextField
                    required
                    variant="outlined"
                    value={formValues.abilities[1].ability.name}
                    placeholder="Abilité 2"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        abilities: [
                          {
                            ability: {
                              name: formValues.abilities[0].ability.name,
                            },
                          },
                          { ability: { name: e.target.value } },
                        ],
                      })
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    variant="outlined"
                    value={formValues.stats[0].base_stat}
                    placeholder="HP"
                    type="number"
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
                    required
                    variant="outlined"
                    value={formValues.stats[1].base_stat}
                    placeholder="Attaque"
                    type="number"
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
                    required
                    variant="outlined"
                    value={formValues.stats[2].base_stat}
                    placeholder="Défense"
                    type="number"
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
                <Grid item xs={6}>
                  <TextField
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        sprites: {
                          front_default: e.target.value,
                          front_shiny: formValues.sprites.front_shiny,
                          back_default: formValues.sprites.back_default,
                          back_shiny: formValues.sprites.back_shiny,
                        },
                      })
                    }
                    value={formValues.sprites.front_default}
                    placeholder="URL image avant"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        sprites: {
                          front_default: formValues.sprites.front_default,
                          front_shiny: formValues.sprites.front_shiny,
                          back_default: e.target.value,
                          back_shiny: formValues.sprites.back_shiny,
                        },
                      })
                    }
                    value={formValues.sprites.back_default}
                    placeholder="URL image arrière"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        sprites: {
                          front_default: formValues.sprites.front_default,
                          front_shiny: e.target.value,
                          back_default: formValues.sprites.back_default,
                          back_shiny: formValues.sprites.back_shiny,
                        },
                      })
                    }
                    value={formValues.sprites.front_shiny}
                    placeholder="URL image avant shiny"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        sprites: {
                          front_default: formValues.sprites.front_default,
                          front_shiny: formValues.sprites.front_shiny,
                          back_default: formValues.sprites.back_default,
                          back_shiny: e.target.value,
                        },
                      })
                    }
                    value={formValues.sprites.back_shiny}
                    placeholder="URL image arrière shiny"
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
