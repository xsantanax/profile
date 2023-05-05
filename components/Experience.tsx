import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <div id='experience' className='bodyItemWrapper bg-[#00132E]'>
      <SectionHeader title='Experience' />
      <div className='bodyItemContent'>
        <div className='flex gap-16 flex-col'>
          <div className='flex gap-6 md:gap-12 mb-4 flex-col md:flex-row items-center text-center'>
            <Link href='https://sort.xyz' target='_blank'>
              <div className='w-48 h-48 bg-white p-[12px] rounded-[8px] flex items-center hover:animate-pulse'>
                <Image
                  alt='sort'
                  src='/img/sort.png'
                  width={192}
                  height={192}
                />
              </div>
            </Link>
            <div className='py-2 flex flex-col justify-center md:text-left'>
              <div className='font-bold text-[17px] mb-2 underline tracking-[0.5px] cursor-pointer'>
                Sort
              </div>
              Sort is a web app developed to enable easy and fast querying of
              data on the Ethereum ecossystem. Using blockchain technologies,
              the platform enables the user to login using their Ethereum wallet
              and explore transactions, contracts, tokens, and any Ethereum data
              they might have interest in, viewing them in clean, beautiful
              charts.
            </div>
          </div>

          <div className='flex gap-6 md:gap-12 mb-4 flex-col-reverse md:flex-row items-center'>
            <div className='py-2 flex flex-col justify-center md:text-right text-center'>
              <div className='font-bold text-[17px] mb-2 underline tracking-[0.5px] cursor-pointer'>
                HighlineFast
              </div>
              HighlineFast is an internet provider company, which the website
              was developed for. Its purpose is to allow new prospects to know
              more about their product, check for its availability in their
              address, and order it if it is available.
            </div>

            <Link href='https://highlinefast.com' target='_blank'>
              <div className='w-48 h-48 bg-white p-[12px] rounded-[8px] flex items-center hover:animate-pulse'>
                <Image
                  alt='highline'
                  src='/img/highline.webp'
                  width={288}
                  height={288}
                />
              </div>
            </Link>
          </div>

          <div className='flex gap-6 md:gap-12 mb-4 flex-col md:flex-row items-center text-center'>
            <Link href='https://bucketofcrabs.net' target='_blank'>
              <div className='w-48 h-48 bg-white p-[12px] rounded-[8px] flex items-center hover:animate-pulse'>
                <Image alt='boc' src='/img/boc.jpeg' width={288} height={288} />
              </div>
            </Link>
            <div className='py-2 flex flex-col justify-center md:text-left'>
              <div className='font-bold text-[17px] mb-2 underline tracking-[0.5px] cursor-pointer'>
                Bucket of Crabs
              </div>
              Bucket of Crabs is a company that matches Minecraft developers
              with Minecraft studios. The website purpose is to allow studios to
              post jobs and allow developers to browse these jobs and apply to
              ones they like.
            </div>
          </div>
          <Link href='https://github.com/xsantanax' target='_blank'>
            <div className='text-right text-blue-400 mt-[-42px] underline'>
              ... and more!
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
