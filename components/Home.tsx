export default function Home() {
  return (
    <div
      id='/'
      style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
      className='max-w-[100%] bg-center bg-cover h-screen w-full min-h-[766px]'
    >
      <div className='px-16 pt-32'>Hi, I am</div>
      <div className='px-16 pt-6 text-[68px] text-bold'>Rafael Santana</div>
      <div className='px-16 pt-6'>
        A software engineer specialized in building amazing digital experiences.
      </div>
    </div>
  )
}
