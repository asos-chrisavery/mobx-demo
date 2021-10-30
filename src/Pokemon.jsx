import React from 'react'
import { usePokeStore } from './storeContext'
import { observer } from 'mobx-react-lite'

export const Pokemon = observer(() => {
    const pokeStore = usePokeStore()

    const handleChange = React.useCallback((e) => pokeStore.setSearch(e.target.value), [pokeStore])

    console.log(pokeStore.record)

    return (
        <div>
            <label>Input A
                <input type="text" value={pokeStore.searchTerm} onChange={handleChange} />
            </label>

            <h2>Match = {pokeStore.closestMatch}</h2>

            <div>Record</div>
            <img style={{width: '40%'}} src={pokeStore.sprite} alt="" />
        </div>
    )
})