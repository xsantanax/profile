import React from 'react'

function Header() {
  return (
    <div className='fixed bg-[#000] space-x-8 h-16 w-full px-10 flex justify-center items-center'>
      <div
        className='cursor-[] min-w-[240px] text-[#eee] text-center animate-pulse'
        style={{ cursor: 'url(/dollar.png),auto' }}
      >
        Rafael Santana
      </div>
      <div className='w-[30%]' />
      <div className='w-52 text-center text-[#eee]'>Auth</div>
      <div className='w-52 text-center text-[#eee]'>API Calls</div>
      <div className='w-52 text-center text-[#eee]'>Past Work</div>
      <div className='w-52 text-center text-[#eee]'>Contact</div>
    </div>
  )
}

export default Header
