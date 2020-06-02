import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterest, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import group from './assets/group.jpg';
import travel from './assets/travel.jpg';
import cook from './assets/cooking.jpg';
import desk from './assets/desk.jpg';

export default function Home() {
  return (
    <div>
      <div className='container-fluid padding'>
        <div className='row padding'>
          <div className='col-md-12 col-lg-6'>
            <h2>If you build it...</h2>
            <p>Bootstrap Accordions makes it possible for designers to effectively organize contents within collapsible items. </p>
            <p>Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still</p>
            <p>Bootstrap Accordions makes it possible for designers to effectively organize contents within collapsible items. </p>
            <br/>
            <a href='#' className='btn btn-primary'>Learn More</a>
          </div>
          <div className='col-lg-6'>
            <img src={desk} className='img-fluid' />
          </div>
        </div>
      </div>

      <div className='container-fluid padding pt-5'>
        <div className='row welcome text-center'>
          <div className='col-12'>
            <h1 className='display-4'>Group near you</h1>
          </div>
          <hr/>
        </div>
      </div>

      <div className='container-fluid padding pt-5'>
        <div className='row padding'>
          <div className='col-md-4'>
            <div className='card'>
              <img className='card-img-top' src={group} />
              <div className='card-body'>
                <h4 className='card-title'>Meeting</h4>
                <p className='card-text'>Playing board games is the greatest way to meet people and have some fun! We have some Bang and Bang Dice</p>
                <a href='#' className='btn btn-outline-secondary'>See more</a>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <img className='card-img-top' src={travel} />
              <div className='card-body'>
                <h4 className='card-title'>Travel</h4>
                <p className='card-text'>Playing board games is the greatest way to meet people and have some fun! We have some Bang and Bang Dice</p>
                <a href='#' className='btn btn-outline-secondary'>See more</a>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <img className='card-img-top' src={cook} />
              <div className='card-body'>
                <h4 className='card-title'>Cooking</h4>
                <p className='card-text'>Playing board games is the greatest way to meet people and have some fun! We have some Bang and Bang Dice</p>
                <a href='#' className='btn btn-outline-secondary'>See more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid padding pt-5'>
        <div className='row text-center padding'>
          <div className='col-12'>
            <h2>Connect</h2>
          </div>
          <div className='col-12 social padding pt-5'>
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