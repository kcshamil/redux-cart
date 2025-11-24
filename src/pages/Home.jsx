import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Home() {
  const dispatch = useDispatch()
  const { loading, allProducts, error } = useSelector(state => state.productReducer)
  // console.log(allProducts);
  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8 
  const totalPages = Math.ceil(allProducts.length/ productsPerPage)

   const pageItemLastIndex = currentPage * productsPerPage
   const pageItemStartIndex = pageItemLastIndex - productsPerPage
   const visibleProductsArray = allProducts?.slice(pageItemStartIndex,pageItemLastIndex)


  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const navigateNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigatePreviousPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  


  return (
    <>
      <Header insideHome={true}/>
      <div className='container py-5'>
        {
          loading ?
            <div className="text-center my-5 fw-bolder fs-5"><img width='80px' src="https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif" alt="loading" />Loading...</div>
            :
            <div className="row my-5">
              {/* duplicate */}
              {
                allProducts?.length > 0 ?
                  visibleProductsArray?.map(product => (
                    <div key={product?.id} className="col-md-3 mb-2">
                      {/* card - react bootstrap */}
                      <Card style={{ width: '17rem' }}>
                        <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title>{product?.title}</Card.Title>
                          <Link to={`/product/${product?.id}/view`} className='btn btn-secondary'>View More..</Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                  :
                  <p className='fs-5 fw-bold my-5'>Product Not found!!!</p>
              }

              <div className="my-3 text-center">
                <button onClick={navigatePreviousPage} className='btn'><FontAwesomeIcon icon={faBackward} /></button>
                <span className='fw-bolder'>{currentPage}of{totalPages}</span>
                <button onClick={navigateNextPage} className='btn'><FontAwesomeIcon icon={faForward} /></button>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default Home