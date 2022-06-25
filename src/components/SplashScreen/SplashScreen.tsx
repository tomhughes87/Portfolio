import React, { useEffect, useState } from 'react'
import Cursor from '../Cursor/Cursor';
import './SplashScreen.css'


export default function SplashScreen() {

const [isActive, setIsActive] = useState(1);

  return (
    
    <div className='EntireSplashScreen' >
    
    <Cursor />
        <div className='topLeftBox SplashScreenImg'>

          <div className='Container-NameBox'>
            <div className='NameBox'>
              <p>Tom</p>
              <p>Hughes</p>
            </div>
            <p className='UnderNameBox'>Coding & Design</p>
          </div>

        </div>

        <div className='btmLeftBox SplashScreenImg' >

        </div>

        <div className='topRightBox SplashScreenImg'>

        </div>

        <div className='btmRightBox SplashScreenImg'>
            
        </div>

    </div>
  )
}
