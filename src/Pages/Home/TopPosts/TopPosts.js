import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import Loader from "../../Loader/Loader";
import TopPostsCard from "./TopPostsCard";

const TopPosts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: topPosts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts", user],
    queryFn: async () => {
      const res = await fetch("https://share-talk-server.vercel.app/topPost", {
        headers: {},
      });
      const data = await res.json();

      refetch();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(topPosts);
  return (
    <div className="container mx-auto border p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {topPosts.map((topPost) => (
          <TopPostsCard topPost={topPost} key={topPost._id}></TopPostsCard>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
