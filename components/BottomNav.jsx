'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { usePathname } from 'next/navigation';
import Link from "next/link"
import { House, Search, User, User2 } from 'lucide-react';
import { getProviders, useSession } from "next-auth/react";
import { useState, useEffect } from "react";



const BottomNav = () => {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const pathName = usePathname();


    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        };
        setUpProviders();
    }, []);

    return (
        <div className={`w-full ${pathName === "/profile/create-prompt" && "hidden"}`}>
            <div className='flex items-center mx-2  w-full my-2 justify-around px-2  py-2 text-xs  rounded-full'>
                <Link href="/busApp" className={`${pathName === "/" ? "text-white font-semibold bg-orange-600 flex gap-1 items-center justify-center p-3 shadow-lg shadow-orange-200/75  rounded-full    " : ""} `}>
                    <House className='mx-auto w-4 h-4' />
                    Acceil
                </Link>
                <div className={`${pathName === "/busApp/depos" ? "text-white font-semibold bg-orange-600 flex gap-1 items-center justify-center p-3 shadow-lg shadow-orange-200/75  rounded-full  " : ""} `}>
                    <Search className="mx-auto w-4 h-4" />
                    <h1>Explorer</h1>
                </div>


                <Dialog>
                    <DialogTrigger asChild>

                        <div className="   ">
                            <User className="w-4 h-4 mx-auto"/>
                            <h1>Connexion</h1>
                        </div>

                    </DialogTrigger>
                    <DialogContent className="sm:w-[360px] w-[90%] rounded-lg ">

                        <DialogHeader>
                            <DialogTitle>


                            </DialogTitle>
                            <DialogTitle>

                                Connexion
                            </DialogTitle>
                            <DialogDescription>

                            </DialogDescription>


                        </DialogHeader>
                        <div className="grid gap-4 py-4">

                        <>
                                    {providers &&
                                        Object.values(providers).map((provider) => (
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    key={provider.name}
                                                    onClick={() => signIn(provider.id)}
                                                    className="black_btn"
                                                >
                                                    Se connecter
                                                </button>
                                                <button
                                                    type="button"
                                                    key={provider.name}
                                                    onClick={() => signIn(provider.id)}
                                                    className="black_btn"
                                                >
                                                    Creer un compte
                                                </button>
                                            </div>

                                        ))}
                                </>

                        </div>
                        <DialogFooter>


                        </DialogFooter>

                    </DialogContent>
                </Dialog>

            </div>




        </div>
    )
}

export default BottomNav
