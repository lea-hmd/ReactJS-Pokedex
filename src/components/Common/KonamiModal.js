import React from 'react'
import { Grid, Box, Modal } from '@mui/material'
import { Typography } from '@mui/material'
import { FcUp, FcDown, FcLeft, FcRight } from 'react-icons/fc'
import { TbLetterA, TbLetterB } from 'react-icons/tb'

function KonamiModal(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '2px solid #red',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box sx={style}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography m={1} variant="h6">
            Easter Egg
          </Typography>
          <Typography variant="body2" m={1}>
            Afin de révéler notre super Easter Egg hypnotisant veuillez taper
            cette séquence de touches :
          </Typography>
          <Typography m={1} variant="h4" fontWeight="bold">
            <FcUp />
            <FcUp />
            <FcDown />
            <FcDown />
            <FcLeft />
            <FcRight />
            <FcLeft />
            <FcRight />
            <TbLetterB />
            <TbLetterA />
          </Typography>
        </Grid>
      </Box>
    </Modal>
  )
}

export default KonamiModal
