import React from 'react'

const PokeContext = React.createContext()
const localState = JSON.parse(localStorage.getItem('pokeState'))

const initialState = {
  theme: 'light',
  pokedex: [],
  customPokedex: [],
}

function pokeReducer(state, action) {
  switch (action.type) {
    case 'switchTheme': {
      return {
        ...state,
        theme: action.payload === 'light' ? 'dark' : 'light',
      }
    }
    case 'storePoke': {
      const data = action.payload
      return {
        ...state,
        pokedex: data,
      }
    }
    case 'addPoke': {
       const data =
         state.customPokedex.length === 0 ? state.pokedex : state.customPokedex
      return {
        ...state,
        customPokedex: [...data, action.payload],
      }
    }
    case 'delPoke': {
      const data =
        state.customPokedex.length === 0 ? state.pokedex : state.customPokedex
      return {
        ...state,
        customPokedex: data.filter((pokemon) => pokemon.id !== action.payload),
      }
    }

    case 'delCustomPoke': {
      return {
        ...state,
        customPokedex: [],
      }
    }

    case 'upPoke': {
      var tempPokedex =
        state.customPokedex.length > 0 ? state.customPokedex : state.pokedex
      return {
        ...state,

        customPokedex: tempPokedex.map((pokemon) => {
          if (parseInt(pokemon.id) === parseInt(action.payload.id)) {
            return action.payload
          } else {
            return pokemon
          }
        }),
      }
    }

    default: {
      return state
    }
  }
}

function PokeProvider({ children }) {
  const [pokeState, pokeDispatch] = React.useReducer(
    pokeReducer,
    localState || initialState
  )

  React.useEffect(() => {
    localStorage.setItem('pokeState', JSON.stringify(pokeState))
  }, [pokeState])

  return (
    <PokeContext.Provider value={{ pokeState, pokeDispatch }}>
      {children}
    </PokeContext.Provider>
  )
}

export { PokeProvider, PokeContext }
