import Link from 'next/link'

export default function Footer() {
  return (
    <div className='p-10 w-full text-center bg-[#030918]'>
      <div>Rafael Santana, {new Date().getFullYear()}</div>
      <div className='mt-6 flex justify-center gap-4'>
        <Link href='https://github.com/xsantanax' target='_blank'>
          <div className='p-[10px] rounded bg-white'>
            <img src='/img/github.png' height={34} width={34} />
          </div>
        </Link>
        <Link href='https://linkedin.com/in/rafaelsantana1' target='_blank'>
          <div className='p-[10px] rounded bg-white'>
            <img src='/img/linkedin.png' height={34} width={34} />
          </div>
        </Link>
      </div>
    </div>
  )
}
