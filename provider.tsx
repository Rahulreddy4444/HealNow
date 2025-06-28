"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { UsersDetailContext } from './context/UserDetailContext';


export type UsersDetail = {
    name: string,
    email: string,
    credits: number
}

function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = useUser();
    const [userDetail, setUserDetail] = useState<any>()
    useEffect(() => {
        user&&CreateNewUser();
    }, [user])

    const CreateNewUser = async () => {
        const result = await axios.post('/api/users');
        console.log(result.data);
        setUserDetail(result.data)
    }
    return (

        <div>
            <UsersDetailContext.Provider value={{userDetail, setUserDetail}}>
                {children}
            </UsersDetailContext.Provider>
        </div>
    )
}

export default Provider