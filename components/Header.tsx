import Link from 'next/link'

function Header() {
  return (
    <div className='fixed bg-[#000] space-x-8 h-16 w-full px-10 flex justify-center items-center'>
      <Link href='/'>
        <div
          className='cursor-pointer min-w-[240px] text-[#eee] text-center animate-pulse'
          // style={{ cursor: 'url(/dollar.png),auto' }}
        >
          Rafael Santana
        </div>
      </Link>

      <div className='w-[30%]' />
      <Link href='auth' className='w-52 text-center cursor-pointer text-[#eee]'>
        <div>Auth</div>
      </Link>
      <Link
        href='apicalls'
        className='w-52 text-center cursor-pointer text-[#eee]'
      >
        <div>API Calls</div>
      </Link>
      <Link
        href='pastwork'
        className='w-52 text-center cursor-pointer text-[#eee]'
      >
        <div>Past Work</div>
      </Link>
      <Link
        href='contact'
        className='w-52 text-center cursor-pointer text-[#eee]'
      >
        <div>Contact</div>
      </Link>
    </div>
  )
}

export default Header
