import React, { useState } from 'react';
import { heroes } from '../assets/heroes';
import { Button, Image, Modal } from 'antd';


const DetailModal = () => {

  window.scrollTo(0,0);


  const superheroeArr = heroes.filter((heroe) => heroe.id === id);
  const superheroe = superheroeArr[0];

  //MANEJO DEL MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Image 
          width={500}
          src={superheroe.url}/>
            <p>{superheroe.superhero} </p>
            <p>{superheroe.characters} </p>
            <p>Primera aparición: {superheroe.first_appearance} </p>
            <p>Publicado por: {superheroe.publisher} </p>
      </Modal>
    </>
  )
};

export default DetailModal