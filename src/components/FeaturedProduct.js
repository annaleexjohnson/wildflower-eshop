import React from 'react'
import '../styles/FeaturedProduct.css'


function FeaturedProduct({name, price, image, alt}) {
  return (
    
    <div className="featured__product">
        <img className='featured__image' alt={alt} src={image}/>
        <p>
            <strong>{name}</strong><br/>
            ${price}
        </p>
    </div> 
    
   
        
  )
}

export default FeaturedProduct