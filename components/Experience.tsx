import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <div id='experience' className='bodyItemWrapper bg-[#00132E]'>
      <SectionHeader title='Experience' />
      <div className='bodyItemContent'>
        <div className='col gap-16 text-center'>
          <div className='experienceWrap'>
            <Link href='https://sort.xyz' target='_blank'>
              <div className='experienceImageWrap'>
                <Image
                  alt='sort'
                  src='/img/sort.png'
                  width={192}
                  height={192}
                />
              </div>
            </Link>
            <div className='experienceTextWrap md:text-left'>
              <div className='experienceTitle'>Sort</div>
              Sort is a web app developed to enable easy and fast querying of
              data on the Ethereum ecossystem. Using blockchain technologies,
              the platform enables the user to login using their Ethereum wallet
              and explore transactions, contracts, tokens, and any Ethereum data
              they might have interest in, viewing them in clean, beautiful
              charts.
            </div>
          </div>

          <div className='experienceWrap flex-col-reverse md:flex-row'>
            <div className='experienceTextWrap md:text-right'>
              <div className='experienceTitle'>HighlineFast</div>
              HighlineFast is an internet provider company, which the website
              was developed for. Its purpose is to allow new prospects to know
              more about their product, check for its availability in their
              address, and order it if it is available.
            </div>

            <Link href='https://highlinefast.com' target='_blank'>
              <div className='experienceImageWrap'>
                <Image
                  alt='highline'
                  src='/img/highline.webp'
                  width={288}
                  height={288}
                />
              </div>
            </Link>
          </div>

          <div className='experienceWrap'>
            <Link href='https://bucketofcrabs.net' target='_blank'>
              <div className='experienceImageWrap'>
                <Image alt='boc' src='/img/boc.jpeg' width={288} height={288} />
              </div>
            </Link>
            <div className='experienceTextWrap md:text-left'>
              <div className='experienceTitle'>Bucket of Crabs</div>
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
