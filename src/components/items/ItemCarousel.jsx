import React from 'react'
import { Link } from 'react-router-dom'

function priceFormat(price){
    const currency = Intl.NumberFormat("id-ID", {
      style: 'currency',
      currency: 'IDR'
    })
  
    return currency.format(price)
}

function ItemCarousel({item}) {
    return (
        <div className="px-4 relative card">
            <div className="rounded-xl overflow-hidden card-shadow" style={{ width: "287px", height: "386px" }}>
                <img src={item.image1} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">{item.name}</h5>
            <span>{priceFormat(item.price)}</span>
            <Link to={`/details/${item.id}`} state={{data: item}} className="stretched-link">
                {/* <!-- fake children --> */}
            </Link>
        </div>
    )
}

export default ItemCarousel