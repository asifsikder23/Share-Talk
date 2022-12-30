import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../Loader/Loader";
import GetCommentCard from "./GetCommentCard";

const GetComment = ({ id }) => {
  console.log(id);
  const {
    data: comments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch('https://share-talk-server.vercel.app/comment', {
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
  console.log(comments);
  return (
    <div>
      {comments.map((getComment) => (
        <GetCommentCard
          key={getComment._id}
          getComment={getComment}
        ></GetCommentCard>
      ))}
    </div>
  );
};

export default GetComment;
