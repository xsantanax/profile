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

      <div
        style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
        className=' max-w-[100%] bg-center 
        h-screen w-full min-w-[1440px] min-h-[766px] bg-cover'
      >
        <div className='px-16 pt-32 text-[#ddd]'>
          Hi, I'm Rafael Santana, a full-stack developer from Brazil. I'm
          passionate about building great software and I'm always looking for
          new challenges.
        </div>
      </div>

      {/* <div className='flex justify-center'>
        <img
          src='img/nightcity.jpg'
          className='h-screen w-full min-w-[1440px] min-h-[766px]'
        />
      </div> */}

      <PastWork />
    </div>
  )
}
export default HomePage
