import { useState } from 'react';
import { fetcher } from '../utils/fetcher'

interface Pokemon {
    name: string;
    url: string;
}

export function usePokemoncompletelist(data: Pokemon[]) {
    const [pokemonsAll, setPokemonsAll] = useState([]);

    function fetchPokemonsAll() {
        if (data) {

            const promises = data.map((p: Pokemon) => {
                return fetcher(p.url);
            })
            Promise.all(promises).then((results) => {
                const pokeAll = results.map((r: any) => {
                    return {
                        name: r.name,
                        image: r.sprites.front_default,
                        type: r.types,
                        abilities: r.abilities,
                        stats: r.stats,
                    }
                });
                setPokemonsAll(pokeAll as any);
            });
        }
    }

    return {
        pokemonsAll: pokemonsAll,
        fetchPokemonsAll: fetchPokemonsAll,
    }

}