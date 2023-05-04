import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <div id='experience' className='bodyItemWrapper bg-[#00132E]'>
      <SectionHeader title='Experience' />
      <div className='bodyItemContent'>
        <div className='bodyItem'>
          <div className='mt-10 flex gap-10 flex-col'>
            <div className='flex'>
              <Link href='https://sort.xyz' target='_blank'>
                <div className='w-48 h-48 bg-white p-[12px] px-[15px] rounded-[40px] flex items-center hover:animate-pulse'>
                  <img src='img/sort.png' />
                </div>
              </Link>
              <div className='ml-12 mt-4'>Project description</div>
            </div>

            <div className='flex'>
              <Link href='https://highlinefast.com' target='_blank'>
                <img
                  className=' w-48 h-48 rounded-[40px] hover:animate-pulse'
                  src='img/highline.webp'
                />
              </Link>
              <div className='ml-12 mt-4'>Project description</div>
            </div>

            <div className='flex'>
              <Link href='https://bucketofcrabs.net' target='_blank'>
                <div className='w-48 h-48 bg-white p-[12px] rounded-[40px] flex items-center hover:animate-pulse'>
                  <img src='img/boc.jpeg' />
                </div>
              </Link>
              <div className='ml-12 mt-4'>Project description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
