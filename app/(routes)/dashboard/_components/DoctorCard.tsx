import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

export type Doctor = {
    id:number,
    specialist: string,
    image: string,
    description: string,
    agentPrompt: string,
    voiceId: string,
    subscriptionRequired: boolean
}

type props={
    doctor: Doctor
}

function DoctorCard({ doctor }:props) {
  return (
    <div>
      <Image src={doctor.image} alt={doctor.specialist} width={200} height={300} className='w-full h-[250px] object-cover rounded-2xl'/>
      <h2 className='font-bold text-lg'>{doctor.specialist}</h2>
      <p className='line-clamp-2 text-sm text-gray-500'>{doctor.description}</p>
      <Button className='w-full mt-2'>Start Consultation <IconArrowRight /> </Button>
    </div>
  )
}

export default DoctorCard
