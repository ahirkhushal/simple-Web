'use client'

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import EmailStep from './steps/EmailStep';
import PhoneStep from './steps/PhoneStep';
import NameStep from './steps/NameStep';
import VerificationStep from './steps/VerificationStep';

export default function SignUp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  const handleNextStep = () => {
    if (step === '1') {
      router.push('/signup?step=2');
    } else if (step === '2') {
      router.push('/signup?step=3');
    } else {
      router.push('/signup?step=1');
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-full max-w-sm rounded-lg bg-white p-8'>
          {step === '1' ? (
            <PhoneStep onSubmit={handleNextStep} />
          ) : step === '2' ? (
            <NameStep onSubmit={handleNextStep} />
          ) : step === '3' ? (
            <VerificationStep onSubmit={handleNextStep} />
          ) : (
            <EmailStep onSubmit={handleNextStep} />
          )}
        </div>
      </div>
    </Suspense>
  );
}
