import Button from '@/components/button'
import Input from '@/components/input'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function EmailStep({ onSubmit }: { onSubmit: () => void }) {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      onSubmit()
    }
  }

  return (
    <>
      <div className='mb-6 flex justify-center'>
        <Image src='/assets/svg/Logo.svg' width={120} height={120} alt='Logo' />
      </div>
      <h2 className='mb-4 text-center text-3xl font-semibold text-[#00F04F]'>
        Welcome to Simple
      </h2>
      <p className='mb-6 text-center text-xs'>
        Log in or sign up to get started.
      </p>
      <form onSubmit={handleEmailSubmit}>
        <div className='relative mb-4 w-full'>
          <Input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            isRequired={true}
            placeholder='Email'
          />
          {email && (
            <AiOutlineCheckCircle
              className='absolute right-3 top-1/2 -translate-y-1/2 transform'
              color='limegreen'
              size={25}
            />
          )}
        </div>
        <Button type='submit'>Sign Up</Button>
      </form>
    </>
  )
}
