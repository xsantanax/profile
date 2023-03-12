import HeaderTransparent from '../components/HeaderTransparent'
import PastWork from '../components/PastWork'

function HomePage() {
  return (
    <div className='overflow-hidden'>
      <HeaderTransparent />
      {/* <div
        style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
        className='h-screen w-full min-w-[1000px] max-w-[100%] bg-center bg-fill'
      /> */}
      <div className='flex justify-center items-center'>
        <img
          src='img/nightcity.jpg'
          className='h-screen w-full  min-w-[1440px]'
        />
      </div>

      <PastWork />
      <div className='h-screen' />
    </div>
  )
}
export default HomePage
