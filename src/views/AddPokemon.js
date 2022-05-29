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
import { Typography } from '@mui/material'

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
          xl={7}
          lg={8}
          md={9}
          sm={8}
          xs={11}
          p={5}
        >
          <Grid container item>
            <FormControl fullWidth>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    textTransform="uppercase"
                    variant="h4"
                    color="#375068"
                    textAlign="center"
                  >
                    Ajouter un nouveau Pokémon
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                  <TextField
                    required
                    fullWidth
                    label="Nom du pokémon"
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
                <Grid item xs={12}>
                  <Typography color="#375068" variant="h5">
                    Général
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
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
                <Grid item xs={12} sm={6} md={4} lg={2}>
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
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <TextField
                    label="Poids en Kg"
                    required
                    fullWidth
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
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Taille en cm"
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
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Abilité 1"
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
                              name: formValues.abilities[1].ability.name,
                            },
                          },
                        ],
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <TextField
                    fullWidth
                    required
                    label="Abilité 2"
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
                <Grid item xs={12}>
                  <Typography color="#375068" variant="h5">
                    Statistiques
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    label="HP"
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
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    label="Attaque"
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
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    variant="outlined"
                    label="Défense"
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
                </Grid>{' '}
                <Grid item xs={12}>
                  <Typography color="#375068" variant="h5">
                    Images
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    label="URL image avant"
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
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    label="URL image arrière"
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
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    required
                    sx={{ width: '100%' }}
                    variant="outlined"
                    label="URL image avant shiny"
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
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    required
                    fullWidth
                    sx={{ width: '100%' }}
                    variant="outlined"
                    label="URL image arrière shiny"
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
          <Grid container justifyContent="center" mt={3} spacing={2}>
            <Grid item xs={12} sm={6} md={4} xl={2.5}>
              <Button
                fullWidth
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
            <Grid item xs={12} sm={6} md={4} xl={2.5}>
              <Button
                fullWidth
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
