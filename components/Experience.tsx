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
              <div className='ml-12 mt-4'>
                Sort is a web app developed to enable easy and fast querying of
                data on the Ethereum ecossystem. Using on an array of blockchain
                technologies, the platform enables the user to login using their
                Ethereum wallet and explore their transactions, contracts,
                tokens, and any Ethereum data they might have interest in,
                viewing them in clean, beautiful charts.
              </div>
            </div>

            <div className='flex'>
              <Link href='https://highlinefast.com' target='_blank'>
                <img
                  className=' w-48 h-48 rounded-[40px] hover:animate-pulse'
                  src='img/highline.webp'
                />
              </Link>
              <div className='ml-12 mt-4'>
                HighlineFast is an internet provider company, which the website
                was developed for. Its purpose is to allow new prospects to know
                more about the product, check for its availability in their
                address, and order it if it is available.
              </div>
            </div>

            <div className='flex'>
              <Link href='https://bucketofcrabs.net' target='_blank'>
                <div className='w-48 h-48 bg-white p-[12px] rounded-[40px] flex items-center hover:animate-pulse'>
                  <img src='img/boc.jpeg' />
                </div>
              </Link>
              <div className='ml-12 mt-4'>
                Bucket of Crabs is a company that matches Minecraft developers
                with Minecraft studios. The website purpose is to allow studios
                to post jobs and allow developers to browse these jobs and apply
                to ones they like.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
