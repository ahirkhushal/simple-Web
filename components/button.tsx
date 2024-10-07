import React from 'react'

interface ButtonProps {
  type: string
  className?: string
  children: React.ReactNode
}

export default function Button({
  type,
  className = '',
  children
}: ButtonProps) {
  return (
    <button
      type={type as 'submit' | 'reset' | 'button'}
      className={`w-full rounded-full bg-[#00F04F] px-4 py-2 font-semibold text-white focus:outline-none ${className}`}
    >
      {children}
    </button>
  )
}
