import { AIDoctorAgents } from '@/public/list'
import React from 'react'
import DoctorCard from './DoctorCard'

function DoctorAgentList() {
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-2xl mb-4'>My Doctors</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols- mt-2 gap-4'>
        {
            AIDoctorAgents.map((doctor, index) => (
                <div key={index}>
                    <DoctorCard doctor={doctor}/>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default DoctorAgentList
