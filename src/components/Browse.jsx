import React from 'react'
import ImageCatalog1 from '../assets/contents/image-catalog-1.jpg'
import ImageCatalog2 from '../assets/contents/image-catalog-2.jpg'
import ImageCatalog3 from '../assets/contents/image-catalog-3.jpg'
import ImageCatalog4 from '../assets/contents/image-catalog-4.jpg'

function Browse() {
  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
        <div className="container mx-auto">
        <div className="flex flex-start mb-4">
            <h3 className="text-2xl capitalize font-semibold">browse the room <br /> that we designed for you</h3>
        </div>

        <div className="grid grid-rows-2 grid-cols-9 gap-4">
            {/* <!-- START: item 1--> */}
            <div className="relative col-span-9 row-span-1 md:col-span-4 card" style={{height: "180px"}}>
            <div className="card-shadow rounded-xl">
                <img src={ImageCatalog1} alt="" className="w-full h-full
                object-cover overlay overflow-hidden rounded-xl" />
            </div>
            <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72">
                <h5 className="text-lg font-semibold">
                Living Room
                </h5>
                <span>18.389 items</span>
            </div>
            <a href="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
            </a>
            </div>
            {/* <!-- END: item 1--> */}

            {/* <!-- START: item 2--> */}
            <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
                <img src={ImageCatalog3} alt="" className="w-full h-full
                object-cover overlay overflow-hidden rounded-xl" />
            </div>
            <div
                className="overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12">
                <h5 className="text-lg font-semibold">
                Decoration
                </h5>
                <span>77.392 items</span>
            </div>
            <a href="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
            </a>
            </div>
            {/* <!-- END: item 2--> */}

            {/* <!-- START: item 3--> */}
            <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
                <img src={ImageCatalog4} alt="" className="w-full h-full
                object-cover overlay overflow-hidden rounded-xl" />
            </div>
            <div
                className="overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12">
                <h5 className="text-lg font-semibold">
                Bed Room
                </h5>
                <span>20.094 items</span>
            </div>
            <a href="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
            </a>
            </div>
            {/* <!-- END: item 3--> */}

            {/* <!-- START: item 4--> */}
            <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
                <img src={ImageCatalog2} alt="" className="w-full h-full
                object-cover overlay overflow-hidden rounded-xl" />
            </div>
            <div className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72">
                <h5 className="text-lg font-semibold">
                Children Room
                </h5>
                <span>837 items</span>
            </div>
            <a href="#details.html" className="stretched-link">
                {/* <!-- fake children --> */}
            </a>
            </div>
            {/* <!-- END: item 4--> */}
        </div>
        </div>
    </section>
  )
}

export default Browse