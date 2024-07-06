import React from 'react'

function priceFormat(price){
    const currency = Intl.NumberFormat("id-ID", {
      style: 'currency',
      currency: 'IDR'
    })
  
    return currency.format(price)
}

function ItemCarousel({image, productName, price}) {
    return (
        <div className="px-4 relative card">
            <div className="rounded-xl overflow-hidden card-shadow" style={{ width: "287px", height: "386px" }}>
                <img src={image} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">{productName}</h5>
            <span>{priceFormat(price)}</span>
            <a href="/" className="stretched-link">
                {/* <!-- fake children --> */}
            </a>
        </div>
    )
}

export default ItemCarousel