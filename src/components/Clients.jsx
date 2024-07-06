import React from 'react'
import AdobeLogo from '../assets/contents/logo-adobe.png'
import IkeaLogo from '../assets/contents/logo-ikea.png'
import HermanMillerLogo from '../assets/contents/logo-herman-miller.png'
import MieleLogo from '../assets/contents/logo-miele.png'

function Clients() {
  return (
    <section className="container mx-auto py-8">
    <div className="flex justify-center flex-wrap">
      <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
        <img src={AdobeLogo} alt="logo-adobe" className="mx-auto" />
      </div>
      <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
        <img src={IkeaLogo} alt="logo-ikea" className="mx-auto" />
      </div>
      <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
        <img src={HermanMillerLogo} alt="logo-herman-miller" className="mx-auto" />
      </div>
      <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
        <img src={MieleLogo} alt="logo-miele" className="mx-auto" />
      </div>
    </div>
  </section>
  )
}

export default Clients