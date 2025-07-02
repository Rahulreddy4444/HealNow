"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { Doctor } from '../../_components/DoctorCard';
import { Circle, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type SessionDetail = {
  id: number,
  notes: string,
  sessionId: string,
  report: JSON,
  selectedDoctor: Doctor,
  createdOn: string
}

function MedicalVoiceAgent() {
  const {sessionid} = useParams();
  const [sessionDetails, setSessionDetails] = React.useState<SessionDetail>(null);
  
  useEffect(() => {
    sessionid && getSessionDetails();
  }, [sessionid]);
  
  const getSessionDetails = async() => {
    const result = await axios.get(`/api/session-chat?sessionId=${sessionid}`);
    console.log(result.data);
    setSessionDetails(result.data);
  }
  return (
    <div className='p-5 bg-secondary border rounded-3xl'>
      <div className='flex justify-between items-center'>
        <h2 className='p-1 px-2 border rounded-md flex gap-2 items-center'> <Circle className='h-4 w-4'/> Not Connected </h2>
        <h2 className='font-bold text-xl text-gray-400'> 00:00 </h2>
      </div>
      
        {
          sessionDetails && (
          <div className='flex items-center flex-col mt-10'>
            <Image src={sessionDetails.selectedDoctor?.image} alt='doctor' width={120} height={120} className='h-[100px] w-[100px] object-cover rounded-full'/>
            <h2 className='mt-1 text-lg'>{sessionDetails.selectedDoctor.specialist}</h2>
            <p className='text-sm text-gray-400'>AI Medical Voice Agent</p>
          
            <div className='mt-30'>
              <h2 className='text-gray-400'>Assistant Message</h2>
              <h2 className='text-lg'>User Message</h2>
            </div>
            <Button className='mt-20'> <PhoneCall /> Start Call</Button>
          </div>
          )
        }
      
    </div>
  )
}

export default MedicalVoiceAgent
