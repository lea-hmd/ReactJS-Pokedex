import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function ImagesSection(front, back, frontShiny, backShiny) {
  return (
    <>
      <Grid
        item
        sx={{ background: 'white', borderRadius: '5px' }}
        lg={9}
        xs={10}
        p={5}
      >
        <Grid item container lg={5}>
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
                <img src={front} alt="" />
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
                <img src={back} alt="" />
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
                <img src={frontShiny} alt="" />
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
                <img src={backShiny} alt="" />
              </Grid>
            </Grid>{' '}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
