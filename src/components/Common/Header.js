import { Grid, CardMedia } from '@mui/material'
import '../../assets/style.css'


export default function Header() {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid id='title'  item sm={7} xs={10} m={5}>
          <CardMedia component="img" image="/Pokedex Header.png" alt="" />
        </Grid>
      </Grid>
    </>
  )
}
