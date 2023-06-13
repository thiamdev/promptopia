"use client";
import { Bell, Building2, Home, Search } from 'lucide-react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from 'next/link';
import Image from "next/image"
import { useEffect, useState } from 'react';


export default function Navbar({ handleSearchChange, searchText }) {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);



    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        };
        setUpProviders();
    }, []);

    return (
        <div className='border-b w-full fixed top-0 z-10  border-gray-300 bg-white'>

            <div className='w-full max-w-7xl mx-auto px-3 h-[80px] flex items-center justify-between '>
                <h1 className='text-orange-600  text-2xl font-bold flex items-center gap-2'><span><Building2 className='w-7 h-7' /></span>imo</h1>
                <div>
                    <div className='md:flex items-center hidden lg:w-[500px] justify-between  border border-gray-400 pl-5 rounded-full shadow-md shadow-neutral-200/70'>
                        <input type="search" name="" value={searchText} onChange={handleSearchChange} required placeholder='votre prochain destination' id=""
                            className='outline-none border-none w-full' />
                        <div className='w-[60px] h-[38px] bg-orange-500 shadow-xl shadow-gray-200 m-1 cursor-pointer flex items-center justify-center text-white rounded-full'>
                            <Search className='w-6 h-6 ' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div>

                    </div>


                    {session?.user ? (
                        <div className="flex gap-3 md:gap-5  items-center">
                            <Link href="/create-prompt" className="black_btn">
                                Mettre son bien immo
                            </Link>
                            <div>
                                <Bell className="w-5 h-5" />
                            </div>
                            <Link href="/profile">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className="rounded-full avatar"
                                    alt="profile"
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                        type="button"
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className="black_btn"
                                    >
                                       Se connecter
                                    </button>
                                ))}
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}
