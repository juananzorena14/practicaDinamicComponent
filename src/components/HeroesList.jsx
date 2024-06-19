import React from 'react';
import { Flex } from 'antd';
import CardComponent from './CardComponent';

const HeroesList = ({superheroes}) => {
  
  return (
    <Flex align='center' wrap justify='space-around' gap={16}>
      {superheroes.map((heroe, index) => {
        return <li key={index} style={{listStyle:'none'}}>
          <CardComponent superheroe={heroe}/>
        </li>
      })}  
    </Flex>
  );
};

export default HeroesList
