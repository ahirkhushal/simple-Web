import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import FormSection from '@/components/formsection'

export default function VerificationStep({
  onSubmit
}: {
  onSubmit: (code: string) => void
}) {
  const [code, setCode] = useState(Array(6).fill(''))

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus()
      }
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const verificationCode = code.join('')

    if (verificationCode.length === 6) {
      onSubmit(verificationCode)
    } else {
      alert('Please enter the complete 6-digit code.')
    }
  }

  return (
    <FormSection
      heading='Verify your phone number'
      subHeading='Enter the code sent to (•••) ••• ••49'
    >
      <form onSubmit={handleFormSubmit}>
        <div className='mb-6 flex justify-center'>
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type='text'
              maxLength={1}
              value={digit}
              onChange={e => handleInputChange(e, index)}
              className='mx-1 h-12 w-12 rounded-lg border border-gray-300 text-center text-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#00F04F]'
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <AiOutlineCheckCircle className='text-[#00F04F]' size={30} />
        </div>
      </form>
    </FormSection>
  )
}
