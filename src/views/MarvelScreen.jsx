import { heroes } from "../assets/heroes"
import HeroesList from "../components/HeroesList"


const MarvelScreen = () => {

  //FILTRO
  const superheroesMarvel = heroes.filter((filtro) => filtro.publisher === "Marvel Comics");

  return (
    <>
      <HeroesList superheroes={superheroesMarvel}/>
    </>
  )
}

export default MarvelScreen