import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlisht from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'






function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlisht' element={<Wishlisht />} />
        <Route path='/product/:id/view' element={<View />} />
        <Route path='/pnf' element={<Pnf />} />

      </Routes>
    </>
  )
}

export default App
