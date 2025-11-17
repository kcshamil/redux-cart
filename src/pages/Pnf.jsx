import React from 'react'
import { Link } from 'react-router-dom'




function Pnf() {
  return (
    <>
    <div style={{height:'80vh'}} className=' d-flex justify-content-center align-items-center flex-column'>
      <h1 className='fw-bolder'>404</h1>
      <img width={'25%'}  src="https://img.websitedesigningcompany.co.in/public/images/page_not_found/404.gif" alt="page not found" />
      <h4>Look Like You're Lost</h4>
      <p>the page you are looking is not available</p>
      <Link to={'/'} className='btn btn-success'>Back to Home</Link>

    </div>
    </>
  )
}

export default Pnf