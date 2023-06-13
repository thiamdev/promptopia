"use client";

import Feed from "@components/Feed";
import { useEffect } from "react";
import Link from "next/link";

const timestamp = Date.now();
const project = 'promptopia';

const Home = () => {

  return (
    <section className="w-full relative">
      
      <Feed />
    </section>
  );
};

export default Home;
