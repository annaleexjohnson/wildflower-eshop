import React from 'react'
import '../styles/Featured.css'
import FeaturedProduct from './FeaturedProduct'
import Sunglasses from '../images/sunglasses.jpg'
import Shoes from '../images/shoes.jpg'
import Perfume from '../images/perfume.jpg'
import Jeans from '../images/jeans.jpg'


function Featured() {
  return (
    <div className="featured__container">
        <div className="featured__title">
            <h1>Featured</h1>
        </div>
        <div className="featured__productList">
            <FeaturedProduct
                name="some super cool shoes that you should buy"
                price={20}
                image={Shoes}
                alt='Some red shoes'
            />
            <FeaturedProduct
                name="some super cool jeans that you should buy"
                price={25}
                image={Jeans}
                alt='A pair of denim jeans'
            />
            <FeaturedProduct
                name="some super cool sunglasses that you should buy"
                price={15}
                image={Sunglasses}
                alt='A tan cloth bag'
            />
            <FeaturedProduct
                name="some super cool perfume that you should buy"
                price={150}
                image={Perfume}
                alt='A collection of luxury perfume'
            />
        </div>
    
    </div>

  )
}

export default Featured