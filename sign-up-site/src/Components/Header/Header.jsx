import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export const Header = () => {
  return (
    
        <div>
         
        <ul  className="Nav-Menu">
            <div className='logo'>
                SLUM CHILD

            </div>
              <li>
                <Link to={'/Layout'}>Home</Link>
              </li>
              <li>
                <Link to={'/Impacts'}>Menu</Link>
              </li>
              <li>
                <Link to={'/Home'}>About</Link>
              </li>
              <li>
                <Link to={'/Hero'}>Contact</Link>
              </li>
            </ul>
            
    </div>
  )
}
