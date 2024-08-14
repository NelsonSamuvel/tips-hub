import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import TipsLayout from '../features/Tips/TipsLayout'

function HomePage() {
  return (
    <div className='grid h-dvh grid-rows-[auto_1fr_auto]'>
        <Header />
        <TipsLayout />
        <Footer />
    </div>
  )
}

export default HomePage