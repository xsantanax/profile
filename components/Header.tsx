import Link from 'next/link'

function Header() {
  return (
    <div className='fixed bg-[#111] space-x-8 h-16 w-full px-10 flex justify-center items-center'>
      <Link href='/'>
        <div
          className='cursor-pointer min-w-[240px] text-[#eee] text-center animate-pulse'
          // style={{ cursor: 'url(/dollar.png),auto' }}
        >
          Rafael Santana
        </div>
      </Link>

      <div className='w-[30%]' />
      <Link href='apicalls' className='headerItem'>
        <div>Experience</div>
      </Link>
      <Link href='pastwork' className='headerItem'>
        <div>Past Work</div>
      </Link>
      <Link href='contact' className='headerItem'>
        <div>Try it out</div>
      </Link>
      <Link href='contact' className='headerItem'>
        <div>Contact</div>
      </Link>
    </div>
  )
}

export default Header
