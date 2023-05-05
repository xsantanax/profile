import React from 'react'

function HeaderMenu({ closeMenu }: { closeMenu: any }) {
  return (
    <div className='flex flex-col items-center pt-40 w-full h-full gap-6'>
      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#'
          closeMenu()
        }}
      >
        Home
      </div>

      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#about'
          closeMenu()
        }}
      >
        About
      </div>

      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#experience'
          closeMenu()
        }}
      >
        Experience
      </div>

      <div
        className='headerItem'
        onClick={() => {
          window.location.href = '#contact'
          closeMenu()
        }}
      >
        Contact
      </div>
    </div>
  )
}

export default HeaderMenu
