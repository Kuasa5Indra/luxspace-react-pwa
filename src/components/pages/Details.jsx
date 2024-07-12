import React, { useState } from 'react'
import Footer from '../Footer'
import FooterMenu from '../FooterMenu'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import { useLocation } from 'react-router-dom'

import Chair1 from '../../assets/products/chairs/product-1.png'
import Chair2 from '../../assets/products/chairs/product-2.png'
import Chair3 from '../../assets/products/chairs/product-3.png'
import Chair4 from '../../assets/products/chairs/product-4.png'

function priceFormat(price) {
    const currency = Intl.NumberFormat("id-ID", {
        style: 'currency',
        currency: 'IDR'
    })

    return currency.format(price)
}

function Details() {
    let { state } = useLocation()

    const [currentImage, setCurrentImage] = useState(state.data.image1)

    return (
        <>
            <Header mode={'alt'} />

            <Breadcrumb />

            <section className="container mx-auto">
                <div className="flex flex-wrap my-4 md:my-12">
                    <div className="w-full md:hidden px-4">
                        <h2 className="text-5xl font-semibold">{state.data.name}</h2>
                        <span className="text-xl">{priceFormat(state.data.price)}</span>
                    </div>
                    <div className="flex-1">
                        <div className="slider">
                            <div className="thumbnail">
                                <div className="px-2">
                                    <div className={`item ${currentImage === state.data.image1 && 'selected'}`} onClick={() => setCurrentImage(state.data.image1)}>
                                        <img src={state.data.image1} alt={state.data.name}
                                            className="object-cover w-full h-full rounded-lg" />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className={`item ${currentImage === state.data.image2 && 'selected'}`} onClick={() => setCurrentImage(state.data.image2)}>
                                        <img src={state.data.image2} alt={state.data.name}
                                            className="object-cover w-full h-full rounded-lg" />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className={`item ${currentImage === state.data.image3 && 'selected'}`} onClick={() => setCurrentImage(state.data.image3)}>
                                        <img src={state.data.image3} alt={state.data.name}
                                            className="object-cover w-full h-full rounded-lg" />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className={`item ${currentImage === state.data.image4 && 'selected'}`} onClick={() => setCurrentImage(state.data.image4)}>
                                        <img src={state.data.image4} alt={state.data.name}
                                            className="object-cover w-full h-full rounded-lg" />
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className={`item ${currentImage === state.data.image5 && 'selected'}`} onClick={() => setCurrentImage(state.data.image5)}>
                                        <img src={state.data.image5} alt={state.data.name}
                                            className="object-cover w-full h-full rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="preview">
                                <div className="item rounded-lg h-full overflow-hidden">
                                    <img src={currentImage} alt={state.data.name}
                                        className="object-cover w-full h-full rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-4 md:p-6">
                        <div className="hidden md:block">
                            <h2 className="text-5xl font-semibold">{state.data.name}</h2>
                            <p className="text-xl">{priceFormat(state.data.price)}</p>
                        </div>

                        <a href="cart.html"
                            className="transition-all duration-200 bg-pink-400 text-black focus:bg-black focus:text-pink-400 rounded-full px-8 py-3 mt-4 inline-flex w-full md:w-auto justify-center">
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="fill-current mr-3">
                                <path
                                    d="M10.8754 19.9824C9.61762 19.9824 8.59436 21.023 8.59436 22.3021C8.59436 23.5812 9.61762 24.6218 10.8754 24.6218C12.1331 24.6218 13.1564 23.5812 13.1564 22.3021C13.1563 21.023 12.1331 19.9824 10.8754 19.9824ZM10.8754 23.3265C10.3199 23.3265 9.86796 22.8669 9.86796 22.302C9.86796 21.7371 10.3199 21.2775 10.8754 21.2775C11.4308 21.2775 11.8828 21.7371 11.8828 22.302C11.8828 22.867 11.4308 23.3265 10.8754 23.3265Z" />
                                <path
                                    d="M18.8764 19.9824C17.6186 19.9824 16.5953 21.023 16.5953 22.3021C16.5953 23.5812 17.6186 24.6218 18.8764 24.6218C20.1342 24.6218 21.1575 23.5812 21.1575 22.3021C21.1574 21.023 20.1341 19.9824 18.8764 19.9824ZM18.8764 23.3265C18.3209 23.3265 17.869 22.8669 17.869 22.302C17.869 21.7371 18.3209 21.2775 18.8764 21.2775C19.4319 21.2775 19.8838 21.7371 19.8838 22.302C19.8838 22.867 19.4319 23.3265 18.8764 23.3265Z" />
                                <path
                                    d="M19.438 7.76929H10.3122C9.96051 7.76929 9.67542 8.05921 9.67542 8.41689C9.67542 8.77456 9.96056 9.06448 10.3122 9.06448H19.438C19.7897 9.06448 20.0748 8.77456 20.0748 8.41689C20.0748 8.05916 19.7897 7.76929 19.438 7.76929Z" />
                                <path
                                    d="M18.9414 11.1323H10.8089C10.4572 11.1323 10.1721 11.4223 10.1721 11.7799C10.1721 12.1376 10.4572 12.4275 10.8089 12.4275H18.9413C19.293 12.4275 19.5781 12.1376 19.5781 11.7799C19.5781 11.4223 19.293 11.1323 18.9414 11.1323Z" />
                                <path
                                    d="M25.6499 4.88395C25.407 4.58083 25.0472 4.40701 24.6626 4.40701H4.82655L4.42595 2.42938C4.34232 2.01685 4.06563 1.67046 3.68565 1.50267L0.890528 0.268871C0.567841 0.126328 0.192825 0.276908 0.0528584 0.604959C-0.0872597 0.933113 0.0608116 1.31453 0.383347 1.45687L3.17852 2.69072L6.2598 17.9013C6.38117 18.5003 6.90578 18.9351 7.50723 18.9351H22.7635C23.1152 18.9351 23.4003 18.6451 23.4003 18.2875C23.4003 17.9298 23.1152 17.6399 22.7635 17.6399H7.50728L7.13247 15.7896H22.8814C23.4828 15.7896 24.0075 15.3548 24.1288 14.7558L25.9101 5.9634C25.9876 5.58054 25.8928 5.18701 25.6499 4.88395ZM22.8814 14.4945H6.87012L5.08895 5.70217L24.6626 5.70222L22.8814 14.4945Z" />
                            </svg>
                            Add to Cart
                        </a>

                        <hr className="my-8" />

                        <h6 className="text-xl font-semibold mb-4">
                            About the product
                        </h6>

                        <div dangerouslySetInnerHTML={{ __html: state.data.description }} />

                    </div>
                </div>
            </section>

            <section className="bg-gray-100 px-4 py-16">
                <div className="container mx-auto">
                    <div className="flex flex-start mb-4">
                        <h3 className="text-2xl capitalize font-semibold">
                            complete your room <br /> with what we designed
                        </h3>
                    </div>
                    <div className="flex flex-wrap overflow-x-auto mb-4 mx-3">

                        <div className="px-3 w-full md:w-3/12 mb-4">
                            <div className="rounded-xl p-4 pb-8 relative bg-white">
                                <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                    <img src={Chair1} alt="" className="w-full h-full object-cover object-center" />
                                </div>
                                <h5 className="text-lg font-semibold mt-4">
                                    Chair Thatty
                                </h5>
                                <span>{priceFormat(89300)}</span>
                                <a href="details.html" className="stretched-link"></a>
                            </div>
                        </div>

                        <div className="px-3 w-full md:w-3/12 mb-4">
                            <div className="rounded-xl p-4 pb-8 relative bg-white">
                                <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                    <img src={Chair2} alt="" className="w-full h-full object-cover object-center" />
                                </div>
                                <h5 className="text-lg font-semibold mt-4">
                                    General Chair
                                </h5>
                                <span>{priceFormat(78000)}</span>
                                <a href="details.html" className="stretched-link"></a>
                            </div>
                        </div>

                        <div className="px-3 w-full md:w-3/12 mb-4">
                            <div className="rounded-xl p-4 pb-8 relative bg-white">
                                <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                    <img src={Chair3} alt="" className="w-full h-full object-cover object-center" />
                                </div>
                                <h5 className="text-lg font-semibold mt-4">
                                    Gaming Chair
                                </h5>
                                <span>{priceFormat(14000)}</span>
                                <a href="details.html" className="stretched-link"></a>
                            </div>
                        </div>

                        <div className="px-3 w-full md:w-3/12 mb-4">
                            <div className="rounded-xl p-4 pb-8 relative bg-white">
                                <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                    <img src={Chair4} alt="" className="w-full h-full object-cover object-center" />
                                </div>
                                <h5 className="text-lg font-semibold mt-4">
                                    Relaxing Chair
                                </h5>
                                <span>{priceFormat(60500)}</span>
                                <a href="details.html" className="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterMenu />

            <Footer />
        </>
    )
}

export default Details