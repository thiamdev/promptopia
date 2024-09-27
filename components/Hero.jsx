'use client'
import React, { useState, useEffect } from 'react';
import hotel1 from "@/public/hotel-1.jpg";
import hotel2 from "@/public/hotel-2.jpg";
import hotel3 from "@/public/hotel-3.jpg";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"


import { AccessibilityIcon, Bed, CameraIcon, CarIcon, ChefHatIcon, HousePlus, MapPinHouse, MountainSnowIcon, ShowerHead, WavesIcon, WifiIcon, WindIcon } from "lucide-react"



const images = [
    hotel1,
    hotel2,
    hotel3,

];

export const Hero = ({ loading }) => {



    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        "Vender rapidement et simplement avec imo",
        "Découvrez nos offres exclusives",
        "Nous offrons les meilleurs services",

    ];

    const [fade, setFade] = useState(true); // Pour gérer l'animation d'opacité


    useEffect(() => {

        const intervalText = setInterval(() => {
            setFade(false); // Commence par masquer l'élément
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Restaure l'opacité après changement de texte
            }, 1000); // Délai pour laisser la transition de disparition se produire
        }, 8000); // Intervalle de 4000 ms
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="w-[100%] md:pt-24 relative">
            <section className="hero-container">
                <div className="hero-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <div key={index} className="hero-slide ">
                            <Image src={src} alt={`Slide ${index}`} className=' filter brightness-50' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </section>
            <div className="container w-full maw-w-5xl mx-auto px-4 pt-32 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2 md:mt-0 my-auto">

                            <h1 className={`text-3xl text-white font-bold tracking-tighter sm:text-7xl xl:text-7xl/none transition-opacity duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
                            >
                                {texts[currentIndex]}
                            </h1>
                            <p className="max-w-[600px] text-white text-muted-foreground md:text-xl">
                                Laissez-vous transporter par des paysages naturels apaisants et ressourçants.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-[500px] h-[300px] p-3 border border-neutral-400 bg-white/20 backdrop-brightness-110 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="bg-white text-white w-14 h-14 rounded-full"></div>
                            {loading ? (
                                <div className="skeleton h-5 w-24"></div>
                            ) : (
                                <h1 className="font-bold text-white text-xl">SeneginDia</h1>
                            )}

                        </div>

                        <div className="flex flex-col gap-1 ">
                            <h2 className="text-md text-white my-2 font-semibold">
                                {loading ? (
                                    <div className="skeleton h-5 w-64 my-3"></div>
                                ) : (
                                    <div className="flex gap-2 items-center">
                                        <MapPinHouse className="w-6 h-6" /> 
                                        Dakar, Liberté 6
                                    </div>

                                )}

                            </h2>
                            <p className="flex flex-col text-white my-3  gap-2">
                                {loading ? (
                                    <div className="skeleton h-5 w-32"></div>
                                ) : (

                                    <div className="flex items-center gap-3 font-semibold">
                                        <Bed className="w-5 h-5 " />
                                        2 Lie
                                    </div>

                                )}
                                {loading ? (
                                    <div className="skeleton h-5 w-32"></div>
                                ) : (

                                    <div className="flex items-center gap-3 font-semibold">
                                        <HousePlus className="w-5 h-5" />
                                        2 Chambre
                                    </div>



                                )}
                                {loading ? (
                                    <div className="skeleton h-5 w-32"></div>
                                ) : (

                                    <div className="flex items-center gap-3 font-semibold">
                                        <ShowerHead className="w-5 h-5" />
                                        1 Salle de bain
                                    </div>

                                )}


                            </p>
                        </div>
                        <div className="absolute bottom-3 right-3">
                            {loading ? (
                                <div className="skeleton h-10 w-36 rounded-full"></div>
                            ) : (
                                <button className=" p-2 px-4 bg-orange-600 text-xs font-semibold rounded-full text-white">Visiter maintenant </button>

                            )}
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}