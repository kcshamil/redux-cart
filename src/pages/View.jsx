import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img className='img-fluid' src="https://www.kiehls.in/media/catalog/product/cache/562c93b51a3633e02dec1d197ab7954c/w/w/ww0043kie_view.1_1_1_1.jpg" alt="product" />
          <div className="d-flex justify-content-evenly mt-5">
            <button className="btn btn-primary">ADD TO WISHLIST</button>
            <button className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>title</h1>
          <h3 className='text-danger'>$price</h3>
          <h4>Brand : </h4>
          <h4>Category : </h4>
          <h4>Description : </h4>

          <h3 className="my-3">Client Reviews</h3>
          {/* duplicate div */}
          <div className="border rounded p-3 shadow">
            <p><span className="fw-bolder">username : </span> message: </p>
            <p>Rating : number<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View