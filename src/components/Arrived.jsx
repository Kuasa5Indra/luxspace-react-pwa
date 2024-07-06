import React from 'react'
import ImageProduct1 from '../assets/contents/image-product-1.jpg'
import ImageProduct2 from '../assets/contents/image-product-2.jpg'
import ImageProduct3 from '../assets/contents/image-product-3.jpg'
import ImageProduct4 from '../assets/contents/image-product-4.jpg'
import ImageProduct5 from '../assets/contents/image-product-5.jpg'

function Arrived() {
  return (
    <section className="flex flex-col py-16">
    <div className="container mx-auto mb-4">
      <div className="flex justify-center text-center mb-4">
        <h3 className="text-2xl capitalize font-semibold">
          Just Arrived <br /> This Summer For You
        </h3>
      </div>
    </div>
    <div className="overflow-x-hidden px-4" id="carousel">
      <div className="container mx-auto"></div>

      <div className="flex -mx-4 flex-row relative">
        {/* <!-- START: item carousel 1--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct1} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
          <span>IDR 89.300,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 1--> */}

        {/* <!-- START: item carousel 2--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct2} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Bankyu Minimax</h5>
          <span>IDR 67.000,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 2--> */}

        {/* <!-- START: item carousel 3--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct3} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
          <span>IDR 12.000,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 3--> */}

        {/* <!-- START: item carousel 4--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct4} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
          <span>IDR 73.000,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 4--> */}

        {/* <!-- START: item carousel 5--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct5} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Racking Plant</h5>
          <span>IDR 2.400,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 5--> */}

        {/* <!-- START: item carousel 6--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct3} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
          <span>IDR 12.000,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 6--> */}

        {/* <!-- START: item carousel 7--> */}
        <div className="px-4 relative card">
          <div className="rounded-xl overflow-hidden card-shadow" style={{width: "287px", height: "386px"}}>
            <img src={ImageProduct4} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
          <span>IDR 73.000,000</span>
          <a href="#details.html" className="stretched-link">
            {/* <!-- fake children --> */}
          </a>
        </div>
        {/* <!-- END: item carousel 7--> */}
      </div>
    </div>
  </section>
  )
}

export default Arrived