type Props = {
  title: string
  bgColor?: string
}
export default function SectionHeader({ title, bgColor }: Props) {
  return (
    <div className={`flex w-[860px] mt-[60px] px-16 ${bgColor}`}>
      <div>{title}</div>
      <div className='flex flex-col ml-4 w-full'>
        <div className='h-[60%] border-b-[1px] border-gray-400' />
        <div className='h-[40%]' />
      </div>
    </div>
  )
}
