import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const CardComponent = ({superheroe}) => {

  const navigate = useNavigate();

  const navegarADetalle = () => {
    navigate(`/detail/${superheroe.id}`)
  };

  
  return (
    <Card
      onClick={navegarADetalle}
      hoverable
      style={{
        width: 240,
        margin: 10
      }}
      cover={
        <img alt={superheroe.alter_ego} 
        src={superheroe.url} 
        height={350}/>
      }
    >
      <Meta 
        title={superheroe.superhero} 
        description={superheroe.alter_ego} 
      />
      <p>Ver detalles...</p>
    </Card>
  )
};

export default CardComponent;