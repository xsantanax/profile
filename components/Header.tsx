'use client'
import { useState, useEffect } from 'react'

function Header() {
  const [isAtTop, setIsAtTop] = useState(window.pageYOffset < 1)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setIsAtTop(window.pageYOffset < 1)
      )
    }
  }, [])

  return (
    <div
      className={`fixed  space-x-8 h-16 w-full px-10 flex justify-center items-center 
    ${isAtTop ? 'border-b-[0.5px] border-[#eee]' : 'bg-[#111]'}
    `}
    >
      <div
        className='cursor-pointer min-w-[240px] text-[#eee] text-center animate-pulse'
        // style={{ cursor: 'url(/dollar.png),auto' }}
        onClick={() => {
          window.location.href = '/'
        }}
      >
        Rafael Santana
      </div>

      <div className='w-[20%]' />

      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#experience'
        }}
      >
        Experience
      </div>

      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#pastwork'
        }}
      >
        Past Work
      </div>
      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#try'
        }}
      >
        Try it out
      </div>

      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#contact'
        }}
      >
        Contact
      </div>

      {/* <Link href='contact' className='headerItem'>
        <div>Contact</div>
      </Link> */}
    </div>
  )
}

export default Header
