import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import FooterMenu from './components/FooterMenu';
import Footer from './components/Footer';
import Offline from './components/Offline';
import Splash from './components/pages/Splash';

import ImageProduct1 from './assets/contents/image-product-1.jpg'
import ImageProduct2 from './assets/contents/image-product-2.jpg'
import ImageProduct3 from './assets/contents/image-product-3.jpg'
import ImageProduct4 from './assets/contents/image-product-4.jpg'
import ImageProduct5 from './assets/contents/image-product-5.jpg'

export default function App() {
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
          <Header mode={'main'} />
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
