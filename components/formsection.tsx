'use client'
import { useRouter } from 'next/navigation'
import { IoChevronBack } from 'react-icons/io5'

export default function FormSection({
  heading,
  subHeading,
  children
}: {
  heading: string
  subHeading: string
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <>
      <div className='mb-10 text-start'>
        <IoChevronBack
          className='cursor-pointer text-2xl text-[#ADADAD]'
          onClick={() => router.back()}
        />
      </div>
      <h2 className='mb-4 text-center text-2xl font-semibold text-[#6C6C6C]'>
        {heading}
      </h2>
      <p className='mb-6 text-center text-xs'>{subHeading}</p>
      {children}
    </>
  )
}
