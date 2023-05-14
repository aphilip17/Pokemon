import React from 'react';
import { PokemonSpec  as PokemonSpecType} from './hooks/pokemoncompletelist';


export default function PokemonSpec({ pokemon }: { pokemon: PokemonSpecType }) {
    const types = pokemon.type.map((type: any) => {
        return type.type.name;
    });
    const abilities = pokemon.abilities.map((ability: any) => {
        return ability.ability.name;
    });

    const stats = pokemon.stats.map((stat: any) => {
        return {
            name : stat.stat.name,
            base: stat.base_stat,
        }
    });
    return (
        <div className='card-spec__content'>
            <div className='card__header'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='card__body'> { pokemon.name }</div>
            <div className='card__spec-content'>
                <div className='card__spec'>
                    <div>{types.toString()}</div>
                    <div className='card__spec-tile '>Types</div>
                </div>
                <div className='card__spec'>
                    {abilities.map((t: string, idx: number) => {
                        return <div key={idx}>{t}</div>
                    })}
                    <div className='card__spec-tile '>Abilities</div>
                </div>
                <div className='card__spec'>
                    {stats.map((stat: any, idx: number) => {
                        return <div key={idx}>
                            {stat.name} {stat.base}
                        </div>
                    })}
                    <div className='card__spec-tile '>Stats</div>
                </div>
            </div>
        </div>
    )
}
