'use client'
import { useState, useEffect } from 'react'

function Header() {
  const [isAtTop, setIsAtTop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAtTop(window.pageYOffset < 1)
      window.addEventListener('scroll', () =>
        setIsAtTop(window.pageYOffset < 1)
      )
    }
  }, [])

  return (
    <nav
      className={`fixed h-[72px] w-full px-16 flex items-center justify-center z-10 border-b-[1px] border-[#ddd] duration-150 bg-[#040404] fade-in
                    ${isAtTop && 'bg-transparent'}
                `}
    >
      <div className={`space-x-8 w-full max-w-[1560px] flex items-center`}>
        <div
          className='cursor-pointer min-w-[180px] text-left font-bold hover:animate-pulse'
          // style={{ cursor: 'url(/dollar.png),auto' }}
          onClick={() => {
            window.location.href = '#'
          }}
        >
          Rafael
        </div>

        <div className='flex-1' />

        <div
          className='headerItem'
          onClick={() => {
            window.location.href = '#'
          }}
        >
          Home
        </div>

        <div
          className='headerItem'
          onClick={() => {
            window.location.href = '#about'
          }}
        >
          About
        </div>

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
            window.location.href = '#contact'
          }}
        >
          Contact
        </div>
      </div>
    </nav>
  )
}

export default Header
