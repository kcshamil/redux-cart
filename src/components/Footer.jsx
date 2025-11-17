import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: '350px' }} className='bg-secondary d-flex justify-content-center align-items-center flex-column text-light'>
      <div className="d-flex justify-content-evenly w-100">
        <div style={{ width: '400px' }} className="intro">
          <h3><FontAwesomeIcon icon={faTruckFast} />Daily Cart</h3>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors. </p>
          <p>Code licensed Luminar,docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link to={'/'} className='text-decoration-none text-light'>Home</Link>
          <Link to={'/wishlist'} className='text-decoration-none text-light'>Wishlist</Link>
          <Link to={'/cart'} className='text-decoration-none text-light'>Cart</Link>

        </div>
        <div className="links d-flex flex-column">
          <h3>Guides</h3>
          <a href="https://react.dev/" className='text-decoration-none text-light'>React</a>
          <a href="https://react.dev/" className='text-decoration-none text-light'>React Bootstrap</a>
          <a href="https://react.dev/" className='text-decoration-none text-light'>React Router</a>
        </div>
        <div className="links d-flex flex-column mx-5">
          <h3>Contact Us</h3>
          <div className='d-flex justify-content-inline align-items-center'>
            <input style={{ width: '200px' }} type='text' className="border rounded " placeholder=' Enter your email here' />
            <button className='btn'><FontAwesomeIcon icon={faArrowRight} className='text-light' /></button>
          </div>
          <div className='mt-5 d-flex justify-content-between'>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faLinkedin}/>
            <FontAwesomeIcon icon={faGithub}/>
  
          </div>
        </div>
      </div>
      <p className='fw-bolder'>Copyright July 2025 Batch, Daily Cart. Built with React Redux.</p>
    </div>
  )
}

export default Footer