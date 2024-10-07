'use client'
import Button from '@/components/button'
import FormSection from '@/components/formsection'
import Input from '@/components/input'
import React, { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function NameStep({ onSubmit }: { onSubmit: () => void }) {
  const [name, setName] = useState('')

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name) {
      onSubmit()
    }
  }

  return (
    <FormSection
      heading='Enter your full name'
      subHeading='For account security, please use your full legal name.'
    >
      <form onSubmit={handleNameSubmit}>
        <div className='relative mb-4 w-full'>
          <Input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            isRequired={true}
            placeholder='Full Name'
          />
          <AiOutlineCheckCircle
            className='absolute right-3 top-1/2 -translate-y-1/2 transform'
            color='limegreen'
            size={25}
          />
        </div>
        <Button type='submit'>Next</Button>
      </form>
    </FormSection>
  )
}
