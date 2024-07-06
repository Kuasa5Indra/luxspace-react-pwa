import { useState } from 'react'
import Header from "./components/Header";
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import FooterMenu from './components/FooterMenu';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <FooterMenu />
      <Footer />
    </>
  )
}
