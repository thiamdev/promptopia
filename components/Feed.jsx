"use client";

import { useState, useEffect } from "react";

import Promptcard from "./PromptCard";
import Spinner from "@components/Spinner";
import { set } from "mongoose";
import Footer from "./Footer"
import { Hero } from "./Hero";
const project = "promptopia";
import Nav from "@/components/Nav"



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
        <Hero />
        <form className="relative w-full flex-center">


        </form>
        <div className="flex-start w-full max-w-7xl mx-auto mt-10 flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div>
            <div className="grid gap-1">
              <h2 className="text-3xl font-bold tracking-tight">Nos meilleures offres</h2>
              <p className="text-muted-foreground">Découvrez nos propriétés les plus populaires.</p>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <div className="font-semibold border-b-2 border-gray-800">Tous</div>
              <div>Maison</div>
              <div>Appartement</div>
              <div>Hotel</div>
            </div>
          </div>

        </div>
        <div className="w-full max-w-7xl mx-auto h-fit">
          <div className="prompt_layout ">
            {loading && [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12].map((items, index) => (

              <div className="flex w-[300px] mt-10 flex-col gap-4" key={index}>
                <div className="skeleton h-56 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
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
