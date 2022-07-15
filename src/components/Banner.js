import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Banner.css'
import { BsArrowRightCircle } from 'react-icons/bs';


function Banner() {

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
    <div className='banner'>
        <div className="banner__itemOne">
            <h1 className="banner__title">
                Feel<br/>
                At<br/>
                Peace
            </h1>
            <Link to='#clothing' className='link'>
              <div className="showNowButton">
                <span>Shop Now</span>
                <BsArrowRightCircle/>
              </div>
            </Link>
            
        </div>
        <div className="banner__itemTwo"></div>

    </div>
  )
}

export default Banner