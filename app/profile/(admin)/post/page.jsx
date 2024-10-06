"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


import PromptCard from "@components/PromptCard";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [providers, setProviders] = useState(null);



  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`/api/users/profil/${session.user.id}`);
      const data = await response.json();
      setLoading(false);
      setMyPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure want to delete this prompt?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPosts = myPosts.filter((p) => p._id !== post._id);
        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    <div className="w-full">
      <main className="profile-page bg-white w-full">
        <section className="relative block w-full">
          <div>
            <Image
              src={"/images/cover/cover-01.png"}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover z-20 object-center"
              width={970}
              height={260}
              style={{
                width: "100%",
                height: "60%",
              }}
            />


          </div>

        </section>
        <section className="relative py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative w-full  flex flex-col min-w-0 break-words bg-white mb-6  rounded-lg -mt-64">
              <div className="px-4 pb-6 mt-10 w-full max-w-2xl mx-auto text-center lg:pb-8 xl:pb-11">
                <div className="relative z-10  mx-auto  h-32 w-full  max-w-[128px]  rounded-full bg-white/40 p-1 backdrop-blur sm:h-[10rem] sm:max-w-[10rem] sm:p-3 overflow-hidden">
                  <div className="relative drop-shadow-2 flex items-center justify-center ">
                    <Image
                      src={session?.user.image}
                      width={100}
                      height={100}

                      alt="profile"
                      className="w-full h-full rounded-full"
                    />
                    <label
                      htmlFor="profile"
                      className="absolute bottom-0 z-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                    >
                      <svg
                        className="fill-current"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                          fill=""
                        />
                      </svg>
                      <input
                        type="file"
                        name="profile"
                        id="profile"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-2xl font-semibold text-black dark:text-white">
                    {session?.user.name}
                  </h3>
                  <p className="font-medium">{session?.user.email}</p>
                  <div className="mx-auto mb-5 mt-5 grid max-w-7xl grid-cols-3 rounded-md  py-2 shadow-1  dark:bg-[#37404F]">
                    <div className="flex flex-col items-center justify-center gap-1 xsm:flex-row">
                      <span className="font-semibold text-black dark:text-white">
                        {myPosts?.length}
                      </span>
                      <span className="text-sm">Posts</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 xsm:flex-row">
                      <span className="font-semibold text-black dark:text-white">
                        {myPosts?.comments?.length}
                      </span>
                      <span className="text-sm">Commentaire</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                      <span className="font-semibold text-black dark:text-white">
                        2K
                      </span>
                      <span className="text-sm">Like</span>
                    </div>
                  </div>

                  <div className="my-4">
                    Ajouter des information
                  </div>



                </div>

              </div>

            </div>
            <div className=" py-2  text-center w-full">
              <div className="flex flex-wrap justify-center w-full">
                <div className="w-full px-4">
                  <div role="tablist" className="tabs tabs-bordered">
                    <input
                      type="radio"
                      name="my_tabs_1"
                      role="tab"
                      className="tab"
                      aria-label="Post"
                      defaultChecked
                    />
                    <div role="tabpanel" className="tab-content p-10">
                      <div className="prompt_layout_profil">
                        {myPosts.map((item, index) => (
                          <PromptCard
                            key={index}
                            post={item}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                          />
                        ))}
                      </div>
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_1"
                      role="tab"
                      className="tab"
                      aria-label="Commentaire"
                    />
                    <div role="tabpanel" className="tab-content p-10 w-full">
                      <div className="prompt_layout_profil"> Les commentaitre</div>
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_1"
                      role="tab"
                      className="tab"
                      aria-label="Likes"
                    />
                    <div role="tabpanel" className="tab-content p-10 w-full">
                      <div className="prompt_layout_profil">Les Likes</div>
                    </div>
                  </div>



                </div>
              </div>



            </div>
          </div>

        </section>

      </main>

    </div>
  );
};

export default MyProfile;
