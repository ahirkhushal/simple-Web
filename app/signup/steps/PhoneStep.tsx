'use client'
import Button from '@/components/button'
import FormSection from '@/components/formsection'
import Input from '@/components/input'
import React, { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function PhoneStep({ onSubmit }: { onSubmit: () => void }) {
  const [phone, setPhone] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value)
    }
  }

  const handlePhoneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (phone) {
      onSubmit()
    }
  }

  return (
    <FormSection
      heading='Enter your phone number'
      subHeading='We’ll only use this to securely log you in and manage your account.'
    >
      <form onSubmit={handlePhoneSubmit}>
        <div className='relative mb-4 w-full'>
          <Input
            type='tel'
            value={phone}
            onChange={handlePhoneChange}
            isRequired={true}
            placeholder='Phone'
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
