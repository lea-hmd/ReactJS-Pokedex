import React from 'react'
import { Grid } from '@mui/material'

export default function AddPokemon() {
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
        ></Grid>
      </Grid>
    </>
  )
}
