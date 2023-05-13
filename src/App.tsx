import React, { useEffect } from 'react';
import { usePokemonlist } from './hooks/pokemonlist';
import { Loader } from './Loader';
import { Error } from './Error';
import PokemonList from './PokemonList';
import { usePokemoncompletelist } from './hooks/pokemoncompletelist';

function App() {
    const { pokemons, isLoading, error } = usePokemonlist();
    const { pokemonsAll, fetchPokemonsAll } = usePokemoncompletelist(pokemons);

    useEffect(() => {
        fetchPokemonsAll();
    }, [pokemons])

    if (isLoading) return <Loader/>
    if (error) return <Error error={error}/>
    console.log(pokemonsAll)

    return (
        <PokemonList
            pokemons={pokemonsAll}
        />
    );
}

export default App;
