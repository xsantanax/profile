'use client'
import { useState, useEffect } from 'react'
import HeaderTransparent from '../components/HeaderTransparent'
import PastWork from '../components/PastWork'
import Header from '../components/Header'

function HomePage() {
  const [isOnTop, setIsOnTop] = useState(window.pageYOffset < 5)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setIsOnTop(window.pageYOffset < 5)
      )
    }
  }, [])

  return (
    <div className='overflow-hidden'>
      {isOnTop ? <HeaderTransparent /> : <Header />}

      <div className='flex justify-center'>
        <img
          src='img/nightcity.jpg'
          className='h-screen w-full min-w-[1440px] min-h-[766px]'
        />
      </div>

      <PastWork />
    </div>
  )
}
export default HomePage
