import React from 'react'
import Product from './Product'
import Shoes from '../images/shoes.jpg'
import '../styles/CategorySection.css'


function CategorySection({title}) {
  return (
    <div className='categorySection'>
        <div className="categorySection__title">
            <h1>shop/ {title}</h1>
        </div>
        <div className="productContainer">
            {/* <Product
                id="1232134"
                name="this is in category section"
                price={25}
                rating={5}
                image={Shoes}
            />
            <Product
                id="1232134"
                name="this is in category section"
                price={25}
                rating={5}
                image={Shoes}
            /> */}
        </div>
    </div>
  )
}

export default CategorySection