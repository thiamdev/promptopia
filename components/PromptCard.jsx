"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import nanoid from "nanoid";
import { Locate, MapPinHouse, Star, StarIcon, Trash } from "lucide-react";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();

  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (post?.creator === session?.user.id) return router.push("/profile");

    router.push(`/profile/post/${post._id}?name=${post._id}`);

  };


  return (
    <div className=" relative w-full group grid [grid-template-areas:stack]">
      <div className="">
        <div
          className="flex-1 flex justify-start w-full cursor-pointer items-center gap-3 profile"
          onClick={handleProfileClick}
        >
          <div className=' my-2 w-full'>

            <div className='h-fit bg-white relative rounded-xl overflow-hidden md:mx-0 mx-4  border border-gray-300 '>
              <div className='w-full h-[200px] relative'>
                <Image
                  src={post?.images?.[0]}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-1 left-3">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                      <Image src={post?.creator?.image} width={47} height={47}/>
                    </div>
                  </div>
                </div>

              </div>

              <div className='p-3 text-gray-800 '>
                <div className="w-full flex items-center justify-between">
                  <div>
                    <p className='text-xs text-left font-light'>{post?.propertyType}</p>
                    <h1 className='font-bold whitespace-nowrap overflow-hidden  w-[200px] text-ellipsis'>
                      <p className="text-left">  {post?.itemToSell}</p>
                    </h1>
                    <p className='text-xs font-extralight flex items-center gap-1'>
                    <div className="flex items-center gap-1">
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5 fill-primary" />
                        <StarIcon className="w-2.5 h-2.5" />
                      </div>
                      <p>8.2 Trés bien</p>

                    </p>
                    <p className='text-xs font-extralight'>
                      <span className='flex gap-1 leading-7 items-center'>
                        <MapPinHouse className="w-4 h-4" />
                        <p> {post?.address}</p>
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className='text-xs font-extralight leading-3'>A partir de: </p>
                    <h1 className='font-bold'>XOF {post?.price}</h1>
                  </div>
                </div>




              </div>
              <div className="w-full">
              {session?.user.id === post?.creator?._id && pathName === "/profile" && (
                <div className="my-4 flex w-full justify-between mx-2">
                  <button
                    type="button"
                    className="font-inter text-sm w-[45%] cursor-pointer bg-white Btn"
                    onClick={handleEdit}
                  >
                    Editer
                  </button>
                  <button
                    type="button"
                    className="font-inter text-sm hover:bg-orange-600 hover:text-white flex-end cursor-pointer bg-white p-2 rounded-full absolute top-1 right-1"
                    onClick={handleDelete}
                  >
                   <Trash className="w-5 h-5"/>
                  </button>
                </div>
              )}
              </div>
           

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PromptCard;
