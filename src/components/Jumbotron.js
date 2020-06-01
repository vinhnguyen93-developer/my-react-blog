import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap';

import './Jumbotron.css';

export default function Jumbotron() {
  return (
    <div>
      <Jumbo fluid className='jumbo'>
        <div className='overlay'></div>
        <Container>
          <h1>Welcome My Blog</h1>
          <p>Nice to meet you !</p>
        </Container>
      </Jumbo>
    </div>
  )
}