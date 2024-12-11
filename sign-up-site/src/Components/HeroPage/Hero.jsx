import React from 'react'
import child1 from '../../assets/Banners/child1.JPG'
import child2 from '../../assets/Banners/child2.JPG'
import child3 from '../../assets/Banners/child3.JPG'
import './Hero.css'

// import { Header } from '../Header/Header'


const Hero = () => {
  
  return (
    <>

    <div className='hero'>
        <div className='hero1'>
            <h2>
                Even the slum child has Dreams...
            </h2>
            <b><p>Register for child support</p></b>
            </div>
           
            <img src={child1} />
            <img src={child2} />
            <img src={child3} />
        
    </div>
    </>
  )
}

export default Hero