"use client";
import { Bell, Building2, Home, Menu, Search } from 'lucide-react';
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
        <div className='border-b w-full fixed top-0  border-gray-300 bg-white'>

            <div className='w-full max-w-7xl mx-auto px-3 h-[80px] flex items-center justify-between '>
                <h1 className='text-orange-600  text-2xl font-bold flex items-center gap-2'><span><Building2 className='w-7 h-7' /></span>imo</h1>
                <div>

                </div>
                <div>

                </div>
                <div className='md:flex justify-between items-center gap-4'>



                    {session?.user ? (
                        <div className="flex gap-3 md:gap-5 items-center">
                           

                            <div>
                                <Bell className="w-5 h-5" />
                            </div>
                            <Link href="/profile/post">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className="rounded-full avatar"
                                    alt="profile"
                                />
                            </Link>
                            <div className='flex justify-between items-center gap-4 '>

                                <div className="drawer drawer-end">
                                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        {/* Page content here */}
                                        <label htmlFor="my-drawer-4" className="">
                                            <Menu className="w-5 h-5" />
                                        </label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                            {session?.user ? (
                                                <div className="flex-row gap-3 text-xl md:gap-5 items-center">
                                                    <Link href="/create-prompt" className="">
                                                        Create new post
                                                    </Link>

                                                    <div>
                                                        Notification
                                                    </div>
                                                    <Link href="/profile/post">
                                                        profile
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
                                        </ul>
                                    </div>
                                </div>
                            </div>

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
                                       Se Connecter
                                    </button>
                                ))}
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}
