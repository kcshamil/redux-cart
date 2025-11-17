import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlisht from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlisht />} />
        <Route path='/product/:id/view' element={<View />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
