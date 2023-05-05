type Props = {
  title: string
}
export default function SectionHeader({ title }: Props) {
  return (
    <div className='flex w-full md:w-[860px] md:px-20'>
      <div className='italic font-[600] text-[18px]'>{title}</div>
      <div className='flex flex-col ml-8 w-full'>
        <div className='h-[60%] border-b-[1px] border-gray-400' />
        <div className='h-[40%]' />
      </div>
    </div>
  )
}
