import React, { useCallback, useEffect, useState } from 'react';
import { usePokemonlist } from './hooks/pokemonlist';
import { Loader } from './Loader';
import { Error } from './Error';
import PokemonList from './PokemonList';
import { usePokemoncompletelist } from './hooks/pokemoncompletelist';
import PokemonSpec from './PokemonSpec';
import { PokemonSpec  as PokemonSpecType} from './hooks/pokemoncompletelist';


function App() {
    const { pokemons, isLoading, error } = usePokemonlist();
    const { pokemonsAll, fetchPokemonsAll } = usePokemoncompletelist(pokemons);
    const [ pokemon, setPokemon ] = useState<PokemonSpecType | undefined>();

    useEffect(() => {
        fetchPokemonsAll();
    }, [pokemons])


    const onHandleSelect = useCallback((pokemon: PokemonSpecType) => {
        setPokemon(pokemon);
    }, [])

    if (isLoading) return <Loader/>
    if (error) return <Error error={error}/>

    const MemoizedPokeList = React.memo(PokemonList)

    return (
        <div className='app__content'>
            <MemoizedPokeList
                pokemons={pokemonsAll} onSelect={onHandleSelect}
            />
            {pokemon &&
                <PokemonSpec
                    pokemon={pokemon}
                />
            }

        </div>
    );
}

export default App;
