import React from "react";
import Nav from "../components/navbar/Nav";
import Hero from "../components/hero/Hero";
import Content_block_title from "../components/content-block-title/content_block_title";
import { FireIcon } from "@heroicons/react/24/outline";
import Movie_card from "../components/movie-card/Movie_card";

const Home = () => {
  return (
    <>
      {/* Navigation bar */}
      <div className="sticky top-0 z-50 glass">
        <Nav />
      </div>
      {/* Content area */}
      <div className="container mx-auto border-1">
        {/* Home Hero */}
        <div>
          <Hero />
        </div>
        {/* Content Title >> Top Movies */}
        <div>
          <Content_block_title title="Top Rate Movie">
            <FireIcon className="h-6 w-6 self-center" aria-hidden="true" />
          </Content_block_title>
        </div>

        {/* Content area >> Top Movies */}
        <div className="flex flex-wrap justify-between">
          <Movie_card />
          <Movie_card />
          <Movie_card />
          <Movie_card />
          <Movie_card />
          <Movie_card />
          <Movie_card />
        </div>
      </div>
    </>
  );
};

export default Home;
