import { Grid, Divider, Typography } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Grid item xs={12} m={5}>
        <Divider
          sx={{
            background: '#fff',
            width: '100%',
            marginBottom: '15px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          variant="middle"
        />
        <Typography
          align="center"
          fontSize="14px"
          fontWeight="bold"
          color="#fff"
          m={5}
        >
          &copy; Team 131 - E3 DAD A - {new Date().toLocaleDateString()} - Tous
          droits réservés
        </Typography>
      </Grid>
    </>
  )
}
