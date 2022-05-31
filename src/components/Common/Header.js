import React from 'react'
import { Grid, CardMedia } from '@mui/material'
import '../../assets/style.css'
import SwitchThemeButton from '../../assets/Toggler'
import KonamiModal from './KonamiModal'

export default function Header() {
  const handleOpen = () => setOpen(true)
  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)
  return (
    <div id="title">
      <Grid container justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" item sm={7} xs={10} mt={4}>
          <CardMedia component="img" image="/Pokedex Header.png" alt="" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} mt={5}>
        <Grid item xs={12} md={6}>
          <SwitchThemeButton />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            width="50px"
            height="50px"
            src="/easterEggs.png"
            alt=""
            id="konamiImg"
            onClick={() => {
              handleOpen()
            }}
          />
        </Grid>
        {open && <KonamiModal open={open} handleClose={handleClose} />}
      </Grid>
    </div>
  )
}
