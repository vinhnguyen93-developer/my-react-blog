import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterest, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import aboutme from './assets/aboutme.jpg';

export default function About() {
  return (
    <div>
      <div className='container-fluid padding'>
        <div className='row padding'>
          <div className='col-md-12 col-lg-6'>
            <h2>About Me</h2>
            <p>Hi! I'm Vinh Nguyen</p>
            <p>I'm a Font End Developer from Ho Chi Minh, Viet Nam.</p>
            <p>I'm enjoy taking complex problems and turning them into simple and beautiful interface design. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it HTML , CSS or JQuery.</p>
            <p>When i'm not coding or pushing pixels, you'll find me in the gym or on the court shooting some hoops.</p>
            <br/>
            <a href='#' className='btn btn-primary'>Read more</a>
          </div>
          <div className='col-lg-6'>
            <img src={aboutme} className='img-fluid' />
          </div>
        </div>
      </div>

      <div className='container-fluid padding pt-5'>
        <div className='row text-center padding'>
          <div className='col-12 social-active padding pt-5'>
            <a href='#'> <FontAwesomeIcon icon={faFacebookF} /></a>
            <a href='#'> <FontAwesomeIcon icon={faTwitter} /></a>
            <a href='#'> <FontAwesomeIcon icon={faPinterest} /></a>
            <a href='#'> <FontAwesomeIcon icon={faInstagram} /></a>
            <a href='#'> <FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}