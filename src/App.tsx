import React from 'react';
import { usePokemonlist } from './hooks/pokemonlist';
import { Loader } from './Loader';
import { Error } from './Error';
import PokemonList from './PokemonList';

function App() {
    const { pokemons, isLoading, error } = usePokemonlist();

    if (isLoading) return <Loader/>
    if (error) return <Error error={error}/>

    return (
        <PokemonList
            pokemons={pokemons}
        />
    );
}

export default App;
