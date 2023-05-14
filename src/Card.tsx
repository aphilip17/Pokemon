import React from 'react';
import './style/pokemon.css';
import { PokemonSpec } from './hooks/pokemoncompletelist';

interface Props {
    pokemon: PokemonSpec;
    onSelect: (pokemon: PokemonSpec) => void;
}

export default function Card({ pokemon, onSelect }: Props) {
    function onClick() {
        onSelect(pokemon);
    }

    return (
        <div className='card__content'
            onClick={onClick}
        >
            <div className='card__header'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='card__body'> { pokemon.name }</div>
        </div>
    )
}
