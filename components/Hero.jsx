'use client'
import React, { useState, useEffect } from 'react';
import hotel1 from "@/public/hotel-1.jpg";
import hotel2 from "@/public/hotel-2.jpg";
import hotel3 from "@/public/hotel-3.jpg";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"


import { AccessibilityIcon, CameraIcon, CarIcon, ChefHatIcon, MountainSnowIcon, WavesIcon, WifiIcon, WindIcon } from "lucide-react"



const images = [
    hotel1,
    hotel2,
    hotel3,

];

export const Hero = () => {



    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        "Bienvenue sur notre site",
        "Découvrez nos offres exclusives",
        "Nous offrons les meilleurs services",

    ];

    const [fade, setFade] = useState(true); // Pour gérer l'animation d'opacité


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); // Change d'image toutes les 6 secondes

        const intervalText = setInterval(() => {
            setFade(false); // Commence par masquer l'élément
            setTimeout(() => {

                setFade(true); // Restaure l'opacité après changement de texte
            }, 1000); // Délai pour laisser la transition de disparition se produire
        }, 8000); // Intervalle de 4000 ms
        return () => clearInterval(interval), clearInterval(intervalText);
    }, []);


    return (
        <section className="w-[99vw] md:py-24 relative">
            <section className="hero-container">
                <div className="hero-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <div key={index} className="hero-slide ">
                            <Image src={src} alt={`Slide ${index}`} className=' filter brightness-50' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </section>
            <div className="container w-full maw-w-5xl mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2 md:mt-0 mt-10">

                            <h1 className={`text-3xl text-white font-bold tracking-tighter sm:text-7xl xl:text-6xl/none transition-opacity duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0" }`}
                            >
                                {texts[currentIndex]}
                            </h1>
                            <p className="max-w-[600px] text-white text-muted-foreground md:text-xl">
                                Laissez-vous transporter par des paysages naturels apaisants et ressourçants.
                            </p>
                        </div>
                    </div>
                    <Carousel className="w-full max-w-md">
                        <CarouselContent>
                            <section className="hero-container-small">
                                <div className="hero-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

                                </div>
                            </section>


                        </CarouselContent>

                    </Carousel>
                </div>
            </div>
            <div>
                <div className="w-full max-w-6xl mx-auto bg-white rounded-md py-10 px-10 mt-8">
                    <div className="flex justify-between overflow-hidden">
                        <li className="flex-row list-none gap-4">
                            <MountainSnowIcon className="w-6 h-6 mx-auto" />
                            Mountain view
                        </li>
                        <li className="flex-row list-none gap-4">
                            <WavesIcon className="w-6 h-6 mx-auto" />
                            Beach access
                        </li>
                        <li className="flex-row list-none gap-4">
                            <ChefHatIcon className="w-6 h-6 mx-auto" />
                            Private chef
                        </li>
                        <li className="flex-row list-none gap-4">
                            <WifiIcon className="w-6 h-6 mx-auto" />
                            Wifi
                        </li>
                        <li className="flex-row list-none gap-4">
                            <CarIcon className="w-6 h-6 mx-auto" />
                            Parking
                        </li>
                        <li className="flex-row list-none gap-4">
                            <CameraIcon className="w-6 h-6 mx-auto" />
                            Security cameras
                        </li>
                        <li className="flex-row list-none gap-4">
                            <AccessibilityIcon className="w-6 h-6 mx-auto" />
                            Wheelchair accessible
                        </li>
                        <li className="flex-row list-none gap-4">
                            <WindIcon className="w-6 h-6 mx-auto" />
                            Patio
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}