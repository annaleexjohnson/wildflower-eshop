import React, { useContext } from 'react'
import '../styles/Checkout.css'
import Header from './Header'
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js'

export default function Checkout() {


  return (
    <div>
        <Header/>
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__ad"></div>
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                </div>
                <CheckoutProduct/>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    </div>
  )
}
