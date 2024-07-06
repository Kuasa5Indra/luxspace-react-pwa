import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import FooterMenu from './components/FooterMenu';
import Footer from './components/Footer';

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_API_URL + '/items', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      const {nodes} = await response.json()
      setItems(nodes)
    }).catch((error) => console.error(error))
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <FooterMenu />
      <Footer />
    </>
  )
}
