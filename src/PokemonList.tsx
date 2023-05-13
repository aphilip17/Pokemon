import React from 'react'
import Card from './Card';
import './style/pokemon.css'

interface Pokemon {
    name: string;
    url: string;
}

interface  Props {
    pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: Props) {
    return (
        <div className="main__content">
            {pokemons.map((p: Pokemon, idx: number) => {
                console.log(p);
                return <Card key={idx} pokemon={p}></Card>

            })}
        </div>
    )
}
