import React from 'react'
import '../styles/Home.css'
import Header from './Header.js'
import Banner from './Banner'
import About from './About'
import Product from './Product.js'
import Shoes from '../images/shoes.jpg'
import Sunglasses from '../images/sunglasses.jpg'
import Watch from '../images/watch.jpg'
import Perfume from '../images/perfume.jpg'
import Jeans from '../images/jeans.jpg'
import Bag from '../images/bag.jpg'

import CategorySection from './CategorySection'
import Featured from './Featured'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="home">
            <div className="home__container">
                <Banner/>
                <About/>
                <Featured/>
                
                <section id="clothing">
                    <h1 className='home__title'>shopping/ clothing</h1>
                    <div className="home__row">
                        <Product 
                            id="1232134"
                            name="some super cool shoes that you should buy"
                            price={20}
                            rating={5}
                            image={Shoes}
                        />
                        <Product 
                            id="1232138"
                            name="some super cool jeans that you should buy"
                            price={25}
                            rating={4}
                            image={Jeans}
                        />
                    </div>   
                </section>
                
                <section id="accessories">
                    <h1 className='home__title'>shopping/ accessories</h1>
                    <div className="home__row">
                        <Product 
                            id="1232136"
                            name="A super cool watch that you should buy"
                            price={30}
                            rating={4}
                            image={Watch}
                        />
                        <Product 
                            id="1232139"
                            name="A super cool bag that you should buy"
                            price={18}
                            rating={3}
                            image={Bag}
                        />
                        <Product 
                            id="1232135"
                            name="some super cool sunglasses that you should buy"
                            price={15}
                            rating={4}
                            image={Sunglasses}
                        />
                    </div>   
                </section>
                
                <section id="beauty">
                    <h1 className='home__title'>shopping/ beauty</h1>
                    <div className="home__row">
                        <Product 
                            id="1232132"
                            name="some super cool perfume that you should buy"
                            price={150}
                            rating={4}
                            image={Perfume}
                        />
                    </div>    
                </section>
               
            </div>
        </div>
    </div>
  )
}
