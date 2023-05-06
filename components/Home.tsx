export default function Home() {
  return (
    <div
      id='/'
      style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
      className='bg-center bg-cover h-screen w-full min-h-[766px] px-16 flex justify-center'
    >
      <div className='max-w-[1560px] w-full'>
        <div className='pt-[126px]'>Hi, I am</div>
        <div className='pt-[10px] text-[68px] text-bold'>Rafael Santana</div>
        <div className='pt-[10px]'>
          A software engineer specialized in building amazing digital
          experiences.
        </div>
      </div>
    </div>
  )
}
