import React from 'react'
import './style/pokemon.css'

interface Props {
    pokemon: any
}

export default function Card({ pokemon }: Props) {
  return (
    <div className='card__content'>
      <div className='card__header'>
        <img src="" alt="" />
      </div>
      <div className='card__body'> { pokemon.name }</div>
    </div>
  )
}
