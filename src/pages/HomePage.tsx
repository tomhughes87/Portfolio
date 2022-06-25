import React from 'react'
import MainCursor from '../components/MainCursor/MainCursor'
import NavBar from '../components/Navbar/NavBar'
import TitleTag from '../components/TitleTag/TitleTag'
import WorkInProgress from '../components/WorkInProgress/WorkInProgress'
import './HomePage.css'

export default function HomePage() {
  return (
    <>

    {/* <NavBar /> */}
    <TitleTag />
    <MainCursor />
    
    <div className='EntireSplashScreen'></div>
    </>

  )
}
