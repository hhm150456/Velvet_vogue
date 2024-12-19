import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Content from './pages/Content';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './componantes/Navbar';
import Footer from './componantes/Footer';
import SearchBar from './componantes/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Collection' element={<Collection/>} />
      <Route path='/Content' element={<Content/>} />
      <Route path='/Product/:productId' element={<Product/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Orders' element={<Orders/>} />
      <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
