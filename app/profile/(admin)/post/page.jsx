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
    <div>
      <main className="profile-page ">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
           
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <div className="avatar mx-auto -mt-12 ">
                        <div className="ring-primary ring-offset-base-100 w-[100px] rounded-full ring ring-offset-2">
                          <Image src={session?.user.image} width={37}
                            height={37} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="btn w-1/2"
                        type="button"
                      >
                        Creer mon profiles
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {myPosts?.length || 0}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Post
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          like
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {myPosts?.comments?.length || 0}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Commentaire
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-7">
                  <h3 className="text-4xl font-semibold  text-blue-700 mb-2">
                    {session?.user?.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-Gray-400 font-bold ">

                    {session?.user?.email}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="flex items-center gap-5">
                        <div className="font-semibold border-b-2 border-gray-800">Vente</div>
                        <div>Commentaire</div>

                      </div>
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
