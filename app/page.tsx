'use client'
import { useState, useEffect } from 'react'
import HeaderTransparent from '../components/HeaderTransparent'
import PastWork from '../components/PastWork'
import Header from '../components/Header'
import Contact from '../components/Contact'

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
        className='max-w-[100%] bg-center bg-cover text-[#ddd]
        h-screen w-full min-h-[766px]'
      >
        <div className='px-16 pt-32 '>Hi, I am</div>
        <div className='px-16 pt-6 text-[68px] text-bold'>Rafael Santana</div>
        <div className='px-16 pt-6'>
          A software engineer specialized in building amazing digital
          experiences.
        </div>
      </div>

      {/* <div className='flex justify-center'>
        <img
          src='img/nightcity.jpg'
          className='h-screen w-full min-w-[1440px] min-h-[766px]'
        />
      </div> */}
      <div id='pastwork' />
      <a href='#pastwork' aria-hidden='true'></a>
      <PastWork />
      <div id='contact' />
      <a href='#contact' aria-hidden='true'></a>
      <Contact />
    </div>
  )
}
export default HomePage
