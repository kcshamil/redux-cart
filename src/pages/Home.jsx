import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
      <Header />
      <div className='container py-5'>
        <div className="row my-5">
          {/* duplicate */}
          <div className="col-md-3 mb-2">
            {/* card - react bootstrap */}
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="https://www.kiehls.in/media/catalog/product/cache/562c93b51a3633e02dec1d197ab7954c/w/w/ww0043kie_view.1_1_1_1.jpg" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <Link to={'/product/id/view'} className='btn btn-primary'>View More..</Link>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home