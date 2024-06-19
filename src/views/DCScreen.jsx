import React from 'react'
import { heroes } from '../assets/heroes'
import HeroesList from '../components/HeroesList'

const DCScreen = () => {

  //FILTRO
  const superheroesDC = heroes.filter((filtro) => filtro.publisher === "DC Comics")

  return (
    <>
      <HeroesList superheroes={superheroesDC}/>
    </>
  )
}

export default DCScreen