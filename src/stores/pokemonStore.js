import { action, computed, makeObservable, observable, autorun, reaction } from "mobx"
import Pokemon from './poke.json'

class PokemonStore {
    searchTerm = ''
    record = undefined
    constructor() {
        makeObservable(this, {
            searchTerm: observable,
            record: observable,
            setSearch: action,
            setRecord: action,
            closestMatch: computed,
            sprite: computed
        })
    }

    setSearch(val) {
        this.searchTerm = val
    }

    setRecord(val) {
        console.log(val)
        this.record = val
    }

    get closestMatch() {
        if(this.searchTerm === '') {
            return 'No match found'
        }

        const match = Pokemon.filter(p => {
            return p.name.toLocaleLowerCase().startsWith(this.searchTerm.toLowerCase())
        })
        return match.length === 0 ? 'No match found' : match[0].name
    }


    get sprite () {
        return this.closestMatch !== 'No match found' && this.record?.sprites?.front_default
    }
}

const reactions = [
    (pokeStore) => {
        autorun(async () => {
            if (pokeStore.closestMatch !== 'No match found') {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeStore.closestMatch.toLowerCase()}`)
                if (response.ok) {
                    const body = await response.json()
                    pokeStore.setRecord(body)
                }
            }
        })
    }
]

const bindReactions = (store,reactions) => reactions.forEach(r => r(store))

export const buildPokeStore = () => {
    const store = new PokemonStore()
    bindReactions(store, reactions)
    return store
}
