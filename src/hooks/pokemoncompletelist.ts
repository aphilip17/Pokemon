import { useState } from 'react';
import { fetcher } from '../utils/fetcher'

interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonSpec {
    name: string;
    image: string;
    type: Array<any>;
    abilities: Array<any>;
    stats: Array<any>;
}

export function usePokemoncompletelist(data: Pokemon[]) {
    const [pokemonsAll, setPokemonsAll] = useState<PokemonSpec[]>([]);

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
                    } as PokemonSpec
                });
                setPokemonsAll(pokeAll);
            });
        }
    }

    return {
        pokemonsAll: pokemonsAll,
        fetchPokemonsAll: fetchPokemonsAll,
    }

}