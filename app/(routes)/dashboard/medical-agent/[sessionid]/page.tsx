"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

function MedicalVoiceAgent() {
  const {sessionid} = useParams();
  
  useEffect(() => {
    getSessionDetails();
  }, [sessionid]);
  
  const getSessionDetails = async() => {
    const result = await axios.get(`/api/session-chat?sessionId=${sessionid}`);
  }
  return (
    <div>
      
    </div>
  )
}

export default MedicalVoiceAgent
