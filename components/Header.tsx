function Header() {
  return (
    <div className='fixed bg-[#111] space-x-8 h-16 w-full px-10 flex justify-center items-center'>
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
