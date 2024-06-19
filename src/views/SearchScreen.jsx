import React, { useEffect, useState } from 'react';
import { heroes } from "../assets/heroes";
import { Input } from 'antd';
import HeroesList from '../components/HeroesList';
const {Search} = Input;

const SearchScreen = () => {

  const [inputValue, setInputValue] = useState("");
  const [superheroesFiltrados, setSuperheroesFiltrados] = useState([]);

  const valueOnChange = (e) => {
    setInputValue(e.target.value)
  };

  //useEffect PARA EL INPUT
  useEffect(() => {
    setSuperheroesFiltrados(heroes)

    const heroesFiltrados = heroes.filter((item) => 
      item.superhero.toLowerCase().includes(inputValue.toLowerCase()));

    setSuperheroesFiltrados(heroesFiltrados)
  }, [inputValue]);

  return (
    <>
    <Search placeholder="Busca tu superhéroe favorito" onChange={valueOnChange} enterButton />
    <br/>
    <br/>
    <HeroesList superheroes={superheroesFiltrados}/>

    {superheroesFiltrados.length === 0 && <p>No se encontraron resultados para tu búsqueda</p>}
    </>
  )
}

export default SearchScreen