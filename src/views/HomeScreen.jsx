import HeroesList from '../components/HeroesList';
import {heroes} from "../assets/heroes"

const HomeScreen = () => {

  const superheroes = heroes;
  console.log(superheroes);

  return (
    <>
      <HeroesList superheroes={superheroes}/>
    </>
  )
}

export default HomeScreen