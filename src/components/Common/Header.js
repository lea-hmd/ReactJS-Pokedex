import { Grid, CardMedia } from '@mui/material'
import '../../assets/style.css'
import SwitchThemeButton from '../../assets/Toggler'
export default function Header() {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          container
          justifyContent="center"
          id="title"
          item
          sm={7}
          xs={10}
          m={5}
        >
          <CardMedia component="img" image="/Pokedex Header.png" alt="" />
          <Grid mt={5}>
            <SwitchThemeButton />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
