import Home from '../components/Home'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className='overflow-hidden text-[#ddd] items-center justify-center bg-red-500'>
      <div id='/' />
      <a href='#/' aria-hidden='true'></a>
      <Home />
      <div id='about' />
      <a href='#about' aria-hidden='true'></a>
      <About />
      <div id='experience' />
      <a href='#experience' aria-hidden='true'></a>
      <Experience />
      <div id='contact' />
      <a href='#contact' aria-hidden='true'></a>
      <Contact />
      <Footer />
    </div>
  )
}
