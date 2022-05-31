import React from 'react'
import { styled } from '@mui/material/styles'
import { PokeContext } from '../context/PokeContext'
import { FormControlLabel, Switch } from '@mui/material'

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 100,
  height: 52,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(46px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#005d8f',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 50,
    height: 50,
    '&:before': {
      backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')`,
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#c41010',
    borderRadius: 20,
  },
}))

const SwitchThemeButton = () => {
  const { pokeState, pokeDispatch } = React.useContext(PokeContext)

  return (
    <>
      <FormControlLabel
        control={
          <StyledSwitch
            checked={pokeState.theme === 'light'}
            onChange={() => {
              pokeDispatch({ type: 'switchTheme', payload: pokeState.theme })
            }}
          />
        }
      />
    </>
  )
}

export default SwitchThemeButton
