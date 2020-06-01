import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import card1 from './assets/card-1.jpg';
import card2 from './assets/card-2.jpg';
import card3 from './assets/card-3.jpg';

const titles = [
  {
    title: 'Meeting',
    image: card1
  },
  {
    title: 'Music',
    image: card2
  },
  {
    title: 'Trip',
    image: card3
  }
];

export default function Home() {
  return (
    <CardDeck>
      {titles.map(item => (
        <Card>
          <CardImg top width="100%" src={item.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      ))}
      
    </CardDeck>
  );
}