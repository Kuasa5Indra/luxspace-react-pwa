import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import FooterMenu from '../FooterMenu'
import Header from '../Header'
import SuccessImage from '../../assets/contents/illustration-success.png'

function Success() {

    useEffect(() => {
        window.localStorage.removeItem('cart')
    }, [])

    return (
        <>
            <Header mode={'alt'} />

            <section className="bg-gray-100 py-8 px-4">
                <div className="container mx-auto">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#" aria-label="current-page">Shopping Cart</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-4 m:py-16">
                <div className="container mx-auto min-h-screen px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full md:w-4/12 text-center">
                            <img src={SuccessImage} alt="success" />
                            <h2 className="text-3xl font-semibold mb-6">
                                Ah yes it's success!
                            </h2>
                            <p className="text-lg mb-12">
                                Furniture yang anda beli akan kami kirimkan saat ini juga so now please sit tight and be ready for it
                            </p>
                            <Link to="/" className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition duration-200 px-8">
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterMenu />

            <Footer />
        </>
    )
}

export default Success