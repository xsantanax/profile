import Work from '../components/Work'
import Contact from '../components/Contact'
import About from '../components/About'

function HomePage() {
  return (
    <div className='overflow-hidden text-[#ddd]'>
      <div id='/' />
      <a href='#/' aria-hidden='true'></a>
      <div
        style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
        className='max-w-[100%] bg-center bg-cover 
        h-screen w-full min-h-[766px]'
      >
        <div className='px-16 pt-32 '>Hi, I am</div>
        <div className='px-16 pt-6 text-[68px] text-bold'>Rafael Santana</div>
        <div className='px-16 pt-6'>
          A software engineer specialized in building amazing digital
          experiences.
        </div>
      </div>

      <div id='about' />
      <a href='#about' aria-hidden='true'></a>
      <About />
      <div id='work' />
      <a href='#work' aria-hidden='true'></a>
      <Work />
      <div id='contact' />
      <a href='#contact' aria-hidden='true'></a>
      <Contact />
    </div>
  )
}
export default HomePage
