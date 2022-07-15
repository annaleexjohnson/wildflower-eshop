import React, { useContext } from 'react'
import Shoes from '../images/shoes.jpg'
import '../styles/CheckoutProduct.css'
import ProductContext from './ProductContext'

export default function CheckoutProduct() {

    const {items} = useContext(ProductContext);
    const{removeFromCart} = useContext(ProductContext);


    return (
        <>
        {items.map((item) => (
            <div className="checkoutProduct">
                            <img src={item.image} alt="shoe_img" className="checkoutProduct__image" />
                            <div className="checkoutProduct__info">
                                <p className="checkoutProduct__title">
                                    {item.name}
                                </p>
                                <p className="checkoutProduct__price">
                                    <small>$</small>
                                    <strong>{item.price}</strong>
                                </p>
                    
                                <p className='checkoutProduct__remove' onClick = {()=>removeFromCart({item})}>remove</p>
                            </div>
                        </div>
        ))}
        </>
        
  )
}
