import React from 'react'
// import { Link } from 'react-router-dom'
import './Impacts.css'
import child2 from '../../assets/Banners/child2.JPG'
import child1 from '../../assets/Banners/child1.JPG'
import child3 from '../../assets/Banners/child3.JPG'
import latest1 from '../../assets/Banners/latest1.JPG'

const Impacts = () => {
  return (
    <div>
        <div className='main-card'>
            <div className='card1'>
                <img src={child2} />
                <div className='container'>
                    <h5>Back to School Program</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ab laborum expedita 
                    temporibus architecto saepe fuga 
                </p>
                </div>
            </div>

            <div className='card1'>
                <img src={latest1} />
                <div className='container'>
                    <h5>Adoption Program</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ab laborum expedita 
                    temporibus architecto saepe fuga 
                </p>
                </div>
            </div>

            <div className='card1'>
                <img src={child3} />
                <div className='container'>
                    <h5>Food and Shelter Program</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ab laborum expedita 
                    temporibus architecto saepe fuga 
                </p>
                </div>
            </div>

            <div className='card1'>
                <img src={child1} />
                <div className='container'>
                    <h5>Good Drinking Water Program</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ab laborum expedita 
                    temporibus architecto saepe fuga 
                </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Impacts