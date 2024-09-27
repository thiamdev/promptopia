"use client";

import { useState, useEffect } from "react";

import Promptcard from "./PromptCard";
import Footer from "./Footer"
import { Hero } from "./Hero";
import Nav from "@/components/Nav";
import { SlidersHorizontal, SlidersVertical } from "lucide-react";

const project = "promptopia";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-10 prompt_layout">
      {data.map((post) => (
        <Promptcard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/prompts/${project}/prompts`, {
          method: "GET",
          cache: "no-cache",
          next: { revalidate: 60 },
        });

        const data = await response.json();

        setPosts(data);
        setLoading(false);

      } catch (error) {
        console.log(error)
      }

    };

    fetchPosts();

  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return posts.filter(
      (item) =>
        regex.test(item.propertyType) ||
        regex.test(item.address) ||
        regex.test(item.itemToSell)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="w-full ">
      <div>
        <Nav
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
        <Hero loading={loading}/>
        <form className="relative w-full flex-center">


        </form>
        <div className="flex-start  w-full max-w-7xl mx-auto mt-20 flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="w-auto mx-auto">
             
            <div className=" flex items-center md:gap-5 gap-2 overflow-x-auto text-gray-800 bg-white  rounded-full md:p-2 p-1 px-1 md:pr-4 pr-2">
            <div className="flex items-center gap-3 font-bold bg-orange-600 rounded-full p-2 px-2  text-white">
                 <h1><SlidersHorizontal className="w-5 h-5"/></h1>
                Filter 
              </div>
              <div onClick={() => setSearchText('')} className={`${searchText === '' && "font-semibold border-b-2 border-black"} cursor-default`}>Tous</div>
              <div onClick={() => setSearchText('maison')} className={`${searchText === 'maison' && "font-semibold border-b-2 border-black"} cursor-pointer`}>Maison</div>
              <div onClick={() => setSearchText('appartement')} className={`${searchText === 'appartement' && "font-semibold border-b-2 border-black"} cursor-pointer`}>Appartement</div>
              <div onClick={() => setSearchText('hotel')} className={`${searchText === 'hotel' && "font-semibold border-b-2 border-black"} cursor-pointer`}>Hotel</div>
            </div>
          </div>

        </div>
        <div className="w-full max-w-7xl mx-auto h-auto">
          <div className="prompt_layout mx-3">
            {loading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((items, index) => (
              <div className="relative w-full group grid [grid-template-areas:stack]">
                <div className="flex w-full  mt-10 flex-col gap-4" key={index}>
                  <div className="skeleton h-56 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>

              </div>

            ))}
          </div>
        </div>






        {searchText ? (
          <div className="w-full max-w-7xl mx-auto">
            <PromptCardList
              data={searchedResults}
              handleTagClick={handleTagClick}
            />
          </div>

        ) : (

          <div className='w-full max-w-7xl mx-auto '>


            <PromptCardList data={posts} handleTagClick={handleTagClick} />
          </div>

        )}


        <Footer />
      </div>


    </section>
  );
};

export default Feed;
