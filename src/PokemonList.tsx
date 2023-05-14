import React from 'react'
import Card from './Card';
import './style/pokemon.css';
import { PokemonSpec } from './hooks/pokemoncompletelist';

interface  Props {
    pokemons: PokemonSpec[];
    onSelect: (pokemon: PokemonSpec) => void;
}

export default function PokemonList({ pokemons, onSelect }: Props) {

    return (
        <div className="main__content">
            {pokemons.map((p: PokemonSpec, idx: number) => {
                return <Card key={idx} pokemon={p} onSelect={onSelect}></Card>

            })}
        </div>
    )
}
