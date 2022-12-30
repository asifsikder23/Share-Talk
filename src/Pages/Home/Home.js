import React from "react";
import TopPosts from "./TopPosts/TopPosts";
import Upload from "./Upload/Upload";

const Home = () => {
  return (
    <div>
      <div className="lg:flex justify-between gap-5 m-2 p-5">
        <div className="md:w-2/4">
          <Upload></Upload>
        </div>
        <div className="hidden lg:flex">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x17_nG48yAY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div>
        <TopPosts></TopPosts>
      </div>
    </div>
  );
};

export default Home;
