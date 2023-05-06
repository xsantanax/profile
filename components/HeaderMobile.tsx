'use client'
import { useState, useEffect } from 'react'
import HeaderMenu from './HeaderMenu'
import { Bars3Icon } from '@heroicons/react/24/outline'

function HeaderMobile() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAtTop(window.pageYOffset < 1)
      window.addEventListener('scroll', () =>
        setIsAtTop(window.pageYOffset < 1)
      )
    }
  }, [])

  return (
    <>
      <div
        className={`fixed h-16 w-full px-16 flex items-center z-10 transition-opacity-ease-in-out duration-200
     ${isAtTop ? 'border-b-[0.5px] border-[#eee]' : 'bg-[#111]'}
    `}
      >
        <div
          className='cursor-pointer min-w-[240px] text-[#f0f0f0] text-left animate-pulse'
          // style={{ cursor: 'url(/dollar.png),auto' }}
          onClick={() => {
            window.location.href = '#'
          }}
        >
          Rafael Santana
        </div>
        <div className='flex-1' />
        <div
          className='cursor-pointer text-[#d0d0d0]'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Menu */}
          <Bars3Icon width={28} />
        </div>
      </div>
      {isMenuOpen && (
        <div className='fixed h-full w-full mt-[64px] z-20 bg-[#012038]'>
          <HeaderMenu closeMenu={() => setIsMenuOpen(false)} />
        </div>
      )}
    </>
  )
}

export default HeaderMobile
