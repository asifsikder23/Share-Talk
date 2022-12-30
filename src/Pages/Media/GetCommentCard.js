import React from "react";

const GetCommentCard = ({ getComment }) => {
  const { name, userPhoto, comment } = getComment;

  return (
    <div>
      <div className="flex items-center space-x-2 my-4">
        <img
          src={userPhoto}
          alt=""
          className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
        />
        <div className="-space-y-1">
          <h2 className="text-sm font-semibold leading-none">{name}</h2>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default GetCommentCard;
