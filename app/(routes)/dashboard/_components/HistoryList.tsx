'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'

function HistoryList() { 
    const [historyList,sethistoryList] = useState([]);
  return (
    <div className='mt-10'>
        {
            historyList.length===0 ?
            <div className='flex items-center flex-col justify-center p-7 border-2 border-dashed rounded-2xl'>
                <Image src={'/medical-assistance.png'} alt='empty' width={200} height={200} />
                <h2 className='font-bold text-xl mt-2'>No Recent Consultations</h2>
                <p>It looks like you haven't consulted with any doctor yet.</p>
                <Button className='mt-3'>+ Start a Consultation</Button>
            </div>:
            <div>List</div>
        }
    </div>
  )
}

export default HistoryList