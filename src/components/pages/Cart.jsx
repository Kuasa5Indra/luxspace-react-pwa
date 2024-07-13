import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import FooterMenu from '../FooterMenu'
import Header from '../Header'
import { Link, redirect } from 'react-router-dom'

import Dhl from '../../assets/courier/dhl.png'
import Fedex from '../../assets/courier/fedex.png'
import AmericanExpress from '../../assets/payment/american_express.png'
import Bitcoin from '../../assets/payment/bitcoin.png'
import Mastercard from '../../assets/payment/mastercard.png'
import Midtrans from '../../assets/payment/midtrans.png'

function priceFormat(price) {
    const currency = Intl.NumberFormat("id-ID", {
        style: 'currency',
        currency: 'IDR'
    })

    return currency.format(price)
}

function Cart({ cart, handleRemoveCartItem }) {
    const [disabledButton, setDisabledButton] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        courier: '',
        payment: '',
        cart: cart
    })

    useEffect(() => {
        if(formData.name != '' && formData.email != '' && formData.address != '' &&
            formData.phone != '' &&
            formData.cart.length == 0
        ){
            setDisabledButton(false)
        }
    }, [formData])

    return (
        <>
            <Header mode={'alt'} cart={cart} />

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

            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
                            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                                <h3 className="text-2xl">Shopping Cart</h3>
                            </div>
                            <div className="border-b border-gray-200 mb-4 hidden md:block">
                                <div className="flex flex-start items-center pb-2 -mx-4">
                                    <div className="px-4 flex-none">
                                        <div className="" style={{ width: "90px" }}>
                                            <h6>Photo</h6>
                                        </div>
                                    </div>
                                    <div className="px-4 w-5/12">
                                        <div className="">
                                            <h6>Product</h6>
                                        </div>
                                    </div>
                                    <div className="px-4 w-5/12">
                                        <div className="">
                                            <h6>Price</h6>
                                        </div>
                                    </div>
                                    <div className="px-4 w-2/12">
                                        <div className="text-center">
                                            <h6>Action</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {cart.length > 0 ? cart.map((item, key) => {
                                return (
                                    <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" key={key}>
                                        <div className="px-4 flex-none">
                                            <div style={{ width: "90px", height: "90px" }}>
                                                <img src={item.image1} alt=""
                                                    className="object-cover rounded-xl w-full h-full" />
                                            </div>
                                        </div>
                                        <div className="px-4 w-auto md:w-5/12 flex-1">
                                            <div>
                                                <h6 className="font-semibold text-lg md:text-xl leading-8">{item.name}</h6>
                                                <span className="text-sm md:text-lg">Office Room</span>
                                                <h6 className="font-semibold text-base md:text-lg block md:hidden">
                                                    {priceFormat(item.price)}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                                            <div className="">
                                                <h6 className="font-semibold text-lg">
                                                    {priceFormat(item.price)}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="px-4 w-2/12">
                                            <div className="text-center">
                                                <button className="text-red-600 border-none focus:outline-none px-3 py-1" onClick={(e) => handleRemoveCartItem(e, item.id)}>
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                                : (
                                    <p id="cart-empty" className="text-center py-8">
                                        Oops... Cart is empty <Link to='/' className="underline">Shop Now!</Link>
                                    </p>
                                )}

                        </div>

                        <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
                            <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-xl">
                                <form action="/success">
                                    <div className="flex flex-start mb-6">
                                        <h3 className="text-2xl">Shipping Details</h3>
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="complete-name" className="text-sm mb-2">Complete Name</label>
                                        <input type="text" id="complete-name" data-input
                                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                                            placeholder="Input your name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="email-address" className="text-sm mb-2">Email Address</label>
                                        <input type="email" id="email-address" data-input
                                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                                            placeholder="Input your email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="address" className="text-sm mb-2">Address</label>
                                        <input type="text" id="address" data-input
                                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                                            placeholder="Input your address" onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="phone-number" className="text-sm mb-2">Phone Number</label>
                                        <input type="tel" id="phone-number" data-input
                                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                                            placeholder="Input your phone number" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="courier" className="text-sm mb-2">Choose Courier</label>

                                        <div className="flex -mx-2 flex-wrap">
                                            <div className="px-2 w-6/12 h-24 mb-4">
                                                <button type="button" data-value="fedex" data-name="courier" onClick={() => setFormData({...formData, courier: 'fedex'})}
                                                    className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                                    <img src={Fedex} alt="fedex"
                                                        className="object-contain max-h-full" />
                                                </button>
                                            </div>
                                            <div className="px-2 w-6/12 h-24 mb-4">
                                                <button type="button" data-value="dhl" data-name="courier" onClick={() => setFormData({...formData, courier: 'dhl'})}
                                                    className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                                    <img src={Dhl} alt="dhl"
                                                        className="object-contain max-h-full" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* <input type="tel" id="phone-number"
                                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                                            placeholder="Input your phone number" /> */}
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label htmlFor="payment" className="text-sm mb-2">Choose Payment</label>
                                        <div className="flex -mx-2 flex-wrap">
                                            <div className="px-2 w-6/12 h-24 mb-4">
                                                <button type="button" data-value="midtrans" data-name="payment" onClick={() => setFormData({...formData, payment: 'midtrans'})}
                                                    className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                                    <img src={Midtrans} alt="midtrans"
                                                        className="object-contain max-h-full" />
                                                </button>
                                            </div>
                                            <div className="px-2 w-6/12 h-24 mb-4">
                                                <button type="button" data-value="mastercard" data-name="payment" onClick={() => setFormData({...formData, payment: 'mastercard'})}
                                                    className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                                    <img src={Mastercard} alt="mastercard"
                                                        className="object-contain max-h-full" />
                                                </button>
                                            </div>
                                            <div className="px-2 w-6/12 h-24 mb-4">
                                                <button type="button" data-value="bitcoin" data-name="payment" onClick={() => setFormData({...formData, bitcoin: 'midtrans'})}
                                                    className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                                    <img src={Bitcoin} alt="bitcoin"
                                                        className="object-contain max-h-full" />
                                                </button>
                                            </div>
                                            <div className="px-2 w-6/12 h-24 mb-4">
                                                <button type="button" data-value="american_express" data-name="payment" onClick={() => setFormData({...formData, payment: 'american_express'})}
                                                    className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                                    <img src={AmericanExpress} alt="american_express"
                                                        className="object-contain max-h-full" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* <input type="tel" id="phone-number"
                                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                                            placeholder="Input your phone number" /> */}
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" onClick={() => redirect('/success')}
                                            className="bg-pink-400 text-black focus:bg-black focus:outline-none w-full py-3 rounded-full text-lg focus:text-pink-400 transition-all duration-200 px-6">
                                            Checkout Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <FooterMenu />

            <Footer />
        </>
    )
}

export default Cart