import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

interface InputProps {
  type: string
  className?: string
  placeholder: string
  isRequired?: boolean
  isDisabled?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  type,
  className = '',
  placeholder,
  isRequired,
  isDisabled,
  value,
  onChange
}: InputProps) {
  return (
    <div className='relative'>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-[#ADADAD] px-4 py-2 pr-10 text-gray-700 focus:bg-white focus:outline-none ${className}`}
        required={isRequired}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      />
      <AiOutlineCheckCircle
        className='absolute right-3 top-1/2 -translate-y-1/2 transform'
        color='limegreen'
        size={25}
      />
    </div>
  )
}
