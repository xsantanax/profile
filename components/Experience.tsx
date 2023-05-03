import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <>
      <div id='experience' />
      <a href='#experience' aria-hidden='true'></a>
      <div className='bodyItemWrapper bg-[#00132E]'>
        <SectionHeader title='Experience' />
        <div className='bodyItemContent'>
          <div className='bodyItem'>
            <div>Check out some of my past projects</div>
            <div className='mt-10 flex gap-8 flex-wrap'>
              <Link href='https://sort.xyz' target='_blank'>
                <div className='w-48 h-48 rounded-[40px] flex items-center hover:animate-pulse'>
                  <img className='w-48 h-32' src='img/sort.png' />
                </div>
              </Link>

              <Link href='https://highlinefast.com' target='_blank'>
                <img
                  className=' w-48 h-48 rounded-[40px] hover:animate-pulse'
                  src='img/highline.webp'
                />
              </Link>

              <Link href='https://bucketofcrabs.net' target='_blank'>
                <img
                  className=' w-48 h-48 rounded-[40px] hover:animate-pulse'
                  src='img/boc.jpeg'
                />
              </Link>

              <Link href='https://bannerwave.com' target='_blank'>
                <img
                  className=' w-48 h-48 rounded-[40px] hover:animate-pulse'
                  src='img/bannerwave.jpeg'
                />
              </Link>

              <Link href='https://politik.vercel.app/' target='_blank'>
                <img
                  className=' w-48 h-48 rounded-[40px] hover:animate-pulse bg-[#111] p-6'
                  src='img/politik.png'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
