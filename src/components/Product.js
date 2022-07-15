import React, {useContext}  from 'react'
import '../styles/Product.css'
import ProductContext from './ProductContext'

export default function Product({name, price, image, rating}) {

  const {addToCart} = useContext(ProductContext)

  return (
        <div className="product">
            <div className="product__image">
                <img src={image}/>
            </div>
            <div className="product__info">
                <p>{name}</p>
                <p className="product__price">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                          <span>⭐</span>
                      ))}
                </div>
                <button className="addToCart" onClick={()=> addToCart(name, price, image, rating)}>Add to Cart</button>
            </div>
        </div>
   
   
  )
}
