'use client'
import PromptCard from "./PromptCard";
import React, { useEffect, useRef, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@components/ui/carousel"
import Image from "next/image"
import home from '@public/hotel-1.jpg'
import { Button } from "@components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import Footer from './Footer'
import { AccessibilityIcon, ArrowBigLeft, ArrowLeft, Bed, CameraIcon, CarIcon, ChefHatIcon, Forward, GripIcon, Heart, HeartIcon, HousePlus, MapPinHouse, MapPinIcon, MedalIcon, MountainSnowIcon, Quote, Share, ShareIcon, ShowerHead, StarIcon, WavesIcon, WifiIcon, WindIcon } from "lucide-react";
import { DialogDemo } from "./DialogDemo";
import { useSession } from "next-auth/react";

const Profile = ({ name, desc, data, loading, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const [liked, setLiked] = useState(true);
  const [likes, setLikes] = useState(data?.likes?.length)

  useEffect(() => {
    if (data?.likes?.includes(session?.user?.id)) {
      setLiked(true);
    }


  }, [data.likes, session?.user?.id])

  const handleLike = async () => {
    try {
      if (liked) {
        await fetch(`api/likes/${data._id}`, {
          method: 'Delete'
        })
        setLikes(likes - 1);
      } else {
        await fetch(`api/likes${data._id}`, {
          method: 'POST'
        })
        setLikes(likes + 1)
      }
      setLiked(!liked)
    } catch (error) {
      console.log(error)

    }
  }



  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const formattedNumber = new Intl.NumberFormat('fr-FR').format(data.price);
  return (

    <section className="w-full">
      <div className="bg-white ">
        <div className='w-full max-w-5xl mx-auto '>
          <div className='w-full md:hidden block'>
            <div className='w-full h-fit'>
              <Link href="/">
                <div className="bg-slate-100 p-2 rounded-full z-10 absolute top-2 left-1">
                  <ArrowLeft className="w-6 h-6" />
                </div>
              </Link>

              <div className="absolute top-2 right-1 z-20 flex items-center gap-3">
                <div onClick={handleLike} className={` ${liked ? 'bg-red-500 text-white' : 'bg-slate-100'} text-black p-2  rounded-full`}>
                  <Heart className="w-5 h-5" />
                </div>
                <div className="bg-slate-100 p-2 rounded-full ">
                  <Forward className="w-5 h-5" />
                </div>
              </div>



              <Carousel className="w-full h-auto">

                {loading ? (

                  <div className="skeleton h-[45vh] w-full"></div>

                ) : (
                  <CarouselContent>
                    {data?.images?.map((item, index) => (
                      <CarouselItem key={index} className="w-full">
                        <Image
                          src={item}
                          alt={index}
                          width={100}
                          height={100}
                          className="aspect-video object-cover w-[100vw] h-auto "
                        />
                      </CarouselItem>
                    ))}

                  </CarouselContent>
                )}

              </Carousel>
              <div className='w-full lg:hidden py-3 font-medium text-2xl px-3'>
                <h1>{data?.itemToSell}</h1>
              </div>
            </div>
          </div>

          <div>
            <div>

            </div>
          </div>
        </div>
        <div className="max-w-6xl p-4 mx-auto lg:px-6 sm:py-8 md:py-10">
          <section className="flex-col hidden gap-4 pb-4 sm:flex sm:flex-row sm:items-center sm:pb-8">
            <h1 className="text-xl font-semibold tracking-tight lg:text-3xl">
              {loading ? (
                <div className="skeleton h-7 w-64"></div>
              ) : (
                <div className=" capitalize">
                  {data?.itemToSell}
                </div>
              )}

            </h1>
            <nav className="flex items-center justify-center gap-1 sm:ml-auto">
              <Button asChild variant="ghost" size="sm" className="gap-1 underline rounded-md underline-offset-2">
                <a href="#">
                  <ShareIcon className="w-4 h-4" />
                  Partager
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="gap-1 underline rounded-md underline-offset-2">
                <a href="#">
                  <HeartIcon className="w-4 h-4" />
                  Liker
                </a>
              </Button>
            </nav>
          </section>
          <section className="relative bg-muted h-[70vh] md:block hidden">
            <div className="md:grid gap-2 h-full sm:grid-cols-4 hidden">
              {data?.images?.slice(0, 5).map((image, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`relative overflow-hidden ${loading ? "skeleton w-full h-full" : ""} transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === 0 ? "col-span-2 row-span-2 rounded-xl sm:rounded-l-xl" :
                    index === 1 ? "rounded-tl-xl" :
                      index === 2 ? "rounded-tr-xl" :
                        index === 3 ? "rounded-bl-xl" :
                          "rounded-br-xl"
                    }`}
                  prefetch={false}
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </div>
            <Button variant="secondary" size="sm" className="absolute gap-1 bottom-4 right-4">
              <GripIcon className="w-4 h-4" />
              Show all photos
            </Button>
          </section>

          <section className="pb-8 md:pt-8 w-full grid md:grid-cols-2 md:w-full gap-8 sm:gap-12 md:gap-16 items-start">
            <div className="grid row-start-2 gap-8 md:row-start-auto">
              <div className="flex-col hidden gap-1 sm:flex">
                <h2 className="text-2xl font-semibold">
                  {loading ? (
                    <div className="skeleton h-6 w-64 my-3"></div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <MapPinHouse className="w-6 h-6" /> {data.address}
                    </div>

                  )}

                </h2>
                <p className="text-gray-800 flex gap-5">
                  {loading ? (
                    <div className="skeleton h-3 w-20"></div>
                  ) : (

                    <div className="flex items-center gap-3 font-semibold">
                      <Bed className="w-5 h-5 " />
                      {data.bedrooms} Lie ·
                    </div>

                  )}
                  {loading ? (
                    <div className="skeleton h-3 w-20"></div>
                  ) : (

                    <div className="flex items-center gap-3 font-semibold">
                      <HousePlus className="w-5 h-5" />
                      {data.livingRooms} Chambre ·
                    </div>



                  )}
                  {loading ? (
                    <div className="skeleton h-3 w-20"></div>
                  ) : (

                    <div className="flex items-center gap-3 font-semibold">
                      <ShowerHead className="w-5 h-5" />
                      {data.bathrooms} Salle de bain
                    </div>

                  )}


                </p>
              </div>
              <Card>
                <CardContent className="relative w-full flex items-center gap-6 p-4 sm:p-6">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                      <Image src="" width={47} height={47} />
                    </div>
                  </div>
                  <div className="flex-1 font-semibold w-full hidden sm:flex md:hidden lg:flex">
                    {loading ? (
                      <div className="skeleton h-7 w-64"></div>
                    ) : (
                      <div className="w-full">
                        {data?.profil?.[0] ? (data?.profil?.[0]) : (data?.username)}
                      </div>

                    )}

                  </div>
                  <div className="flex items-center gap-6 ml-auto">
                    <div className="flex flex-col gap-1 text-center">
                      <div className="text-2xl font-semibold tracking-tighter">
                        {loading ? (
                          <div className="skeleton h-4 w-20"></div>
                        ) : (
                          <>
                            4.93
                          </>

                        )}

                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-0.5 text-center">
                      <div className="text-2xl font-semibold tracking-tighter">
                        {loading ? (
                          <div className="skeleton h-4 w-20"></div>
                        ) : (
                          <>
                            {data?.comments?.length}
                          </>

                        )}

                      </div>
                      <div className="text-xs font-semibold underline">Commentaire</div>
                    </div>
                  </div>
                  <Link href="#" className="absolute inset-0" prefetch={false}>
                    <span className="sr-only">View reviews</span>
                  </Link>
                </CardContent>
              </Card>


              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-12 h-12">
                  <MedalIcon className="w-7 h-7" />
                </div>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Catherine is a Superhost</div>
                  <div className="text-sm text-muted-foreground">Superhosts are experienced, highly rated hosts.</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-12 h-12">
                  <MapPinIcon className="w-7 h-7" />
                </div>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Great location</div>
                  <div className="text-sm text-muted-foreground">
                    100% of recent guests gave the location a 5-star rating.
                  </div>
                </div>
              </div>

              {loading ? (
                <>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-[80%]"></div>
                  <div className="skeleton h-4 w-[75%]"></div>
                  <div className="skeleton h-4 w-[60%]"></div>
                </>

              ) : (
                <>
                  <div className="prose">
                    <p>{data?.description}</p>

                  </div>

                </>

              )}

              <div className="grid gap-8">
                <h3 className="text-xl font-semibold">Ce que cet endroit offre</h3>
                <ul className="grid gap-6 lg:grid-cols-2">
                  {loading ? (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="skeleton h-10 w-10 rounded-full"></div>
                        <div className="skeleton h-4 w-20 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="skeleton h-10 w-10 rounded-full"></div>
                        <div className="skeleton h-4 w-20 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="skeleton h-10 w-10 rounded-full"></div>
                        <div className="skeleton h-4 w-20 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="skeleton h-10 w-10 rounded-full"></div>
                        <div className="skeleton h-4 w-20 rounded-full"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      {data?.dispo?.Mountain === true && (
                        <li className="flex gap-4">
                          <MountainSnowIcon className="w-6 h-6" />
                          Mountain view
                        </li>
                      )}
                      {data?.dispo?.beach === true && (
                        <li className="flex gap-4">
                          <WavesIcon className="w-6 h-6" />
                          Beach access
                        </li>
                      )}
                      {data?.dispo?.chef === true && (
                        <li className="flex gap-4">
                          <ChefHatIcon className="w-6 h-6" />
                          Private chef
                        </li>
                      )}
                      {data?.dispo?.wifi === true && (
                        <li className="flex gap-4">
                          <WifiIcon className="w-6 h-6" />
                          Wifi
                        </li>
                      )}
                      {data?.dispo?.parking === true && (
                        <li className="flex gap-4">
                          <CarIcon className="w-6 h-6" />
                          Parking
                        </li>
                      )}
                      {data?.dispo?.camera === true && (
                        <li className="flex gap-4">
                          <CameraIcon className="w-6 h-6" />
                          Security cameras
                        </li>
                      )}
                      {data?.dispo?.wheelchair === true && (
                        <li className="flex gap-4">
                          <AccessibilityIcon className="w-6 h-6" />
                          Wheelchair accessible
                        </li>
                      )}
                      {data?.dispo?.patio === true && (
                        <li className="flex gap-4">
                          <WindIcon className="w-6 h-6" />
                          Patio
                        </li>
                      )}





                    </>)}



                </ul>

              </div>

              <div className="grid gap-8 w-full">
                {loading ? (
                  <>
                    <div className="skeleton w-[220px] h-[170px]"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full ">
                      <div className="flex gap-3 py-3 px-2 overflow-hidden">
                        {!data.comments ? (

                          <div></div>

                        ) : (
                          <>

                          </>)}
                      </div>
                    </div>
                  </>
                )}

                <DialogDemo />
              </div>
            </div>

            <div className="grid w-full row-start-1 gap-4 md:row-start-auto">
              <div className="flex flex-col gap-1 sm:hidden">
                <h2 className="font-semibold sm:text-2xl">

                  {loading ? (
                    <div className="skeleton h-6 w-64 my-3"></div>
                  ) : (
                    <div className="flex gap-2">
                      <MapPinHouse className="w-6 h-6 " /> {data.address}
                    </div>

                  )}

                </h2>
                <p className="flex gap-3 text-sm sm:text-base text-gray-800">

                  {loading ? (
                    <div className="skeleton h-3 w-20"></div>
                  ) : (

                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 " />
                      {data.bedrooms} Lie ·
                    </div>

                  )}
                  {loading ? (
                    <div className="skeleton h-3 w-20"></div>
                  ) : (

                    <div className="flex items-center gap-3">
                      <HousePlus className="w-5 h-5" />
                      {data.livingRooms} Chambre ·
                    </div>



                  )}
                  {loading ? (
                    <div className="skeleton h-3 w-20"></div>
                  ) : (

                    <div className="flex items-center gap-3">
                      <ShowerHead className="w-5 h-5" />
                      {data.bathrooms} Salle de Bain
                    </div>

                  )}


                </p>
              </div>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    {loading ? (
                      <div className="flex justify-between items-center">
                        <div className="skeleton h-4 w-20 my-2"></div>
                        <div className="skeleton h-4 w-20"></div>
                      </div>

                    ) : (
                      <div className="flex justify-between items-center">
                        <div className="capitalize text-base">{data.saleType}</div>
                        <span className=""> {formattedNumber} <span className="text-sm">FCFA</span></span>

                      </div>

                    )}
                  </CardTitle>
                </CardHeader>

              </Card>
            </div>
          </section>
        </div>
        <Footer />
      </div>


    </section>


  );
};

export default Profile;
