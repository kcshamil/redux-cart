import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'



function Wishlist() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      {/* wishlist with content */}
      <div className="row my-5">
         <div className="col-md-3 mb-2">
            {/* card - react bootstrap */}
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="https://www.kiehls.in/media/catalog/product/cache/562c93b51a3633e02dec1d197ab7954c/w/w/ww0043kie_view.1_1_1_1.jpg" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <div className="d-flex justify-content-evenly my-1">
                  <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                   <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>
                </div>
              </Card.Body>
            </Card>

          </div>

      </div>
    </div>
    </>
  )
}

export default Wishlist