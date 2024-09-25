'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from "next/link"
import { CreditCard, History, House, Search, Settings, User } from 'lucide-react';

const BottomNav = () => {
    const pathName = usePathname();
    return (
        <div className='w-full'>
            <div className='flex items-center mx-2  w-full my-2 justify-around px-2  py-2 text-xs  rounded-full'>
                <Link href="/busApp" className={`${pathName === "/" ? "text-white font-semibold bg-orange-600 flex gap-1 items-center justify-center p-3 shadow-lg shadow-orange-200/75  rounded-full    " : ""} `}>
                <House className='mx-auto w-4 h-4'/>
                    Acceil
                </Link>
                <Link href="/busApp/depos" className={`${pathName === "/busApp/depos" ? "text-white font-semibold bg-blue-800 flex gap-1 items-center justify-center p-3 shadow-lg shadow-blue-500/75  rounded-full   " : ""} `}>
                <Search className="mx-auto w-4 h-4"/>
                <h1>Explorer</h1>
                </Link>
                <Link href="/busApp/historique" className={`${pathName === "/profile/create-prompt" ? "text-white font-semibold bg-blue-800 flex gap-1 items-center justify-center p-3 shadow-lg shadow-blue-500/75  rounded-full    " : ""} `}>
                <User className="mx-auto w-4 h-4"/>
                <h1>Connexion</h1>
                </Link>
               
            </div>




        </div>
    )
}

export default BottomNav
