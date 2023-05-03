import Home from '../components/Home'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className=' text-[#ddd] flex flex-col items-center justify-center'>
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
