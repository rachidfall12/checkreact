import React from 'react';
import './carte.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carte = () => {
  return (
    
    <div className='container '>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OIF.iwKY3RsJjgC%2biO8Bk6tMyA&w=201&h=201&c=7&r=0&o=5&pid=1.7" />
      <Card.Body>
        <Card.Title>Nike Dunk</Card.Title>
        <Card.Text>
          Une des paires les plus vendues de l'année le Nike Dunk est 
          connu pour son style tout terrain unisex et à prix raisonnable.
        </Card.Text>
        <Button variant="primary">Show more</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/236x/99/ec/5f/99ec5f91dba29ccb5d7e61b6ab257296.jpg" />
    <Card.Body>
      <Card.Title>Balenciaga</Card.Title>
      <Card.Text>
        Apportez une touche finale à vos outfit et attirez
        l'attention partout où vous allez grace à son style époustouflant.
      </Card.Text>
      <Button variant="primary">Show more</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIF.LQfGRPFD0tSLPbOUH0HkeQ?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Nike Dunk</Card.Title>
        <Card.Text>
        Une des paires les plus vendues de l'année le Nike Dunk est 
        connu pour son style tout terrain unisex et à prix raisonnable.
        </Card.Text>
        <Button variant="primary">Show more</Button>
      </Card.Body>
    </Card>

    </div>
    
  )
}

export default Carte