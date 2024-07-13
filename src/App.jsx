import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import FooterMenu from './components/FooterMenu';
import Footer from './components/Footer';
import Offline from './components/Offline';
import Splash from './components/pages/Splash';

import Cart from './components/pages/Cart';
import Profile from './components/pages/Profile';
import Details from './components/pages/Details';

import ImageProduct1 from './assets/contents/image-product-1.jpg'
import ImageProduct2 from './assets/contents/image-product-2.jpg'
import ImageProduct3 from './assets/contents/image-product-3.jpg'
import ImageProduct4 from './assets/contents/image-product-4.jpg'
import ImageProduct5 from './assets/contents/image-product-5.jpg'

function App({cart}) {
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine)
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([
    {
      'name': 'Cangkir Mauttie',
      'price': 38000,
      'image1': ImageProduct1
    },
    {
      'name': 'Bankyu Minimax',
      'price': 67000,
      'image1': ImageProduct2
    },
    {
      'name': 'Buku Sudi Edition',
      'price': 120000,
      'image1': ImageProduct3
    },
    {
      'name': 'Watch Notes X',
      'price': 130000,
      'image1': ImageProduct4
    },
    {
      'name': 'Racking Plant',
      'price': 2400,
      'image1': ImageProduct5
    },
  ])

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine)
  }

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_API_URL + '/items', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      const { nodes } = await response.json()
      setItems(nodes)
      const script = document.createElement("script")
      script.src = "/carousel.js"
      script.async = false
      document.body.appendChild(script)
    }).catch((error) => console.error(error))
    handleOfflineStatus()
    window.addEventListener('online', handleOfflineStatus)
    window.addEventListener('offline', handleOfflineStatus)

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

    return function () {
      window.removeEventListener('online', handleOfflineStatus)
      window.removeEventListener('offline', handleOfflineStatus)
    }
  }, [offlineStatus])

  return (
    <>
      {isLoading ? <Splash /> : (
        <>
          {offlineStatus && <Offline />}
          <Header mode={'main'} cart={cart} />
          <Hero />
          <Browse />
          <Arrived items={items} />
          <Clients />
          <FooterMenu />
          <Footer />
        </>
      )}
    </>
  )
}

export default function Router(){
  const cachedCart = window.localStorage.getItem('cart')
  const [cart, setCart] = useState([])
  function handleAddToCart(item) {
    const currentIndex = cart.length
    const newCart = [...cart, {...item, id: currentIndex + 1}]
    setCart(newCart)
    window.localStorage.setItem('cart', JSON.stringify(newCart))
  }

  function handleRemoveCartItem(event, id) {
    const revisedCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(revisedCart)
    window.localStorage.setItem('cart', JSON.stringify(revisedCart))
  }

  useEffect(() => {
    if(cachedCart !== null){
      setCart(JSON.parse(cachedCart))
    }
  }, [cachedCart])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart={cart} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/details/:id' element={<Details handleAddToCart={handleAddToCart} cart={cart} />} />
        <Route path='/cart' element={<Cart cart={cart} handleRemoveCartItem={handleRemoveCartItem} />} />
      </Routes>
    </BrowserRouter>
  )
}
