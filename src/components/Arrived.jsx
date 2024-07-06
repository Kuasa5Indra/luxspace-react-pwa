import React from 'react'
import ItemCarousel from './items/ItemCarousel'

function Arrived({items}) {
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
        {items.map((item, key) => {
          return (
            <ItemCarousel key={key} productName={item.name} price={item.price} image={item.image1}/>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Arrived