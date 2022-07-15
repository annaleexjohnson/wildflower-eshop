import React, {useContext, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import ProductContext from './ProductContext'

export default function Header() {

    const { items } = useContext(ProductContext);
    const location = useLocation();

    useEffect(()=>{
        console.log(location)
        let elem = document.getElementById(location.hash.slice(1));
        if (elem){
            elem.scrollIntoView({behavior: 'smooth', block: 'center'})
        } else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
    }, [location])
    
    return (
        <div className="header">
            <Link to="/home" className="link">
                <div className="header__logo">
                    <h2 className="header__logoTitle">Wildflower</h2>
                </div>
            </Link>

            <div className="header__links">
                <Link to='/home/#clothing'className="header__link link">
                    <div >
                        clothing
                    </div>
                </Link>
               
                <Link to='/home/#accessories' className="header__link link"> 
                    <div >
                        accessories
                    </div>
                </Link>
               
                <Link to='/home/#beauty'className="header__link link">
                    <div >
                        beauty
                    </div>
                </Link>
               
            </div>

           
            <div className="header__nav">
                <SearchIcon className="header__searchIcon"/>

                <div className="nav__item">
                    
                    <div className="nav__itemLineOne">
                        Hello Guest
                    </div>
                    <Link to='/login'className= 'link'>
                        <div className="nav__lineItemTwo ">
                            Sign In
                        </div>
                    </Link>
                </div>
                <div className="nav__item">
                    <div className="nav__itemLineOne">
                        Your
                    </div>
                    <div className="nav__lineItemTwo">
                        Shop
                    </div>
                </div>
                <div className="nav__item">
                    <Link to='/checkout' className="link">
                        <div className="nav_itemBasket">
                            <ShoppingBasketIcon/>
                        </div>
                    </Link>
                    
                    <div className="nav__lineItemTwo nav__basketCount">
                        {/* number of items in the cart */}
                        {items.length}
                    </div>
                </div>
            </div>
        </div>
    )
}
