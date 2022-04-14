import { Grid, CardMedia } from '@mui/material'

export default function Header() {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sm={7} xs={10} m={5}>
          <CardMedia component="img" image="/Pokedex Header.png" alt="" />
        </Grid>
      </Grid>
    </>
  )
}
