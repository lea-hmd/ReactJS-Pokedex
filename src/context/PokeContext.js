import React from 'react'

const PokeContext = React.createContext()
const localState = JSON.parse(localStorage.getItem('pokeState'))

const initialState = {
    theme: 'light',
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
            return {
                ...state,
                pokedex : action.payload
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
