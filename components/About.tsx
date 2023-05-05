import SectionHeader from '../components/SectionHeader'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='bodyItemWrapper '>
      <SectionHeader title='About' />
      <div className='bodyItemContent'>
        <div className='flex flex-col '>
          <div>
            Hello! My name is Rafael and I am a software engineer who loves
            building the internet. My interest in app development started back
            in 2014 when I decided to try building Android apps. Soon I also
            started building web and mobile apps (iOS and Android), and I've
            been working with it ever since.
          </div>
          <div className='mt-6'>
            Fast-forward to today, and I’ve had the privilege of working at
            startups, banks, and web and app development companies in Brazil and
            the United States. My main focus these days is building amazing
            digital experiences.
          </div>
          <div className='mt-6'>
            Here are a few technologies I’ve been working with recently:
          </div>
          <div className='flex mt-5'>
            <div className='flex flex-col w-[50%]'>
              <div>Typescript</div>
              <div>React</div>
              <div>React Native</div>
              <div>Next.js</div>
            </div>
            <div className='flex flex-col w-[50%]'>
              <div>Firebase</div>
              <div>Git</div>
              <div>Tailwind CSS</div>
              <div>Styled Components</div>
            </div>
          </div>
        </div>
        <Image
          alt='me'
          src='/img/fotocut70.jpg'
          className='object-cover ml-12 h-72'
          width={200}
          height={288}
        />
      </div>
    </div>
  )
}

export default About
