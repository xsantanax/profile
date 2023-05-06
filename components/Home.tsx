export default function Home() {
  return (
    <div
      id='/'
      style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
      className='bg-center bg-cover h-screen w-full min-h-[766px] px-16'
    >
      <div className='pt-32'>Hi, I am</div>
      <div className='pt-6 text-[68px] text-bold'>Rafael Santana</div>
      <div className='pt-6'>
        A software engineer specialized in building amazing digital experiences.
      </div>
    </div>
  )
}
