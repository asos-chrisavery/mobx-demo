import React from 'react'
import CalculatorStore from "./stores/calculatorStore";
import { buildPokeStore } from './stores/pokemonStore'
const CalcStoreContext = React.createContext()

export const CalcStoreProvider = ({ children }) => {
    const calcStore = new CalculatorStore()
    const pokeStore = buildPokeStore()
    return <CalcStoreContext.Provider value={{ calcStore, pokeStore }}>{children}</CalcStoreContext.Provider>
}

export const useCalcStore = () => {
    const { calcStore } = React.useContext(CalcStoreContext)
    return calcStore
}

export const usePokeStore = () => {
    const { pokeStore } = React.useContext(CalcStoreContext)
    return pokeStore
}