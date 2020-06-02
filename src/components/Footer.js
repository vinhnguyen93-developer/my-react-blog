import React from 'react';

import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className='container-fluid padding'>
        <div className='row text-center'>
          <div className='col-md-4'>
            <img src={logo} />
            <hr className='light'/>
            <p>555-555-555</p>
            <p>email@gmail.com</p>
            <p>100 street name</p>
            <p>City, State, 1000</p>
          </div>
          <div className='col-md-4'>
            <hr className='light'/>
            <h5>Our Hours</h5>
            <hr className='light'/>
            <p>Monday: 5pm - 9pm</p> 
            <p>Monday: 5pm - 9pm</p>
            <p>Monday: 5pm - 9pm</p>
          </div>
          <div className='col-md-4'>
            <hr className='light'/>
            <h5>Service Area</h5>
            <hr className='light'/>
            <p>100 street name</p>
            <p>100 street name</p>
            <p>100 street name</p>
          </div>
          <div className='col-12'>
          <hr className='light'/>
          <h5>&copy; google.com</h5>
          </div>
        </div>
      </div>
    </footer>
  )
}