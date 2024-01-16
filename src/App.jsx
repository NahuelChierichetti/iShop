import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart'
import PageError from './components/Error/PageError'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer title='iShop'/>}/>
              <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} />
              <Route path={'/category/:categoryId'} element={<ItemListContainer title='iShop'/>} />
              <Route path={'/cart'} element={<Cart />} />
              <Route path={'/checkout'} element={<Checkout />} />
              <Route path={'*'} element={<PageError />} />
            </Routes>
          </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
