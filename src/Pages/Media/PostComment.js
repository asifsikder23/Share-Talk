import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const PostComment = () => {
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    form.reset();

    const review = {
      email: user.email,
      name: user.displayName,
      userPhoto: user.photoURL,
      comment: comment,
    };
    console.log(review);
    fetch("https://share-talk-server.vercel.app/comment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    alert("Success");
  };
  return (
    <div className="my-2">
      <form onSubmit={handleReview}>
        <div className="flex flex-col w-full">
          <div className="flex justify-between gap-3">
            <textarea
              name="comment"
              type="text"
              rows="3"
              placeholder="Comment..."
              className="  dark:text-gray-100 dark:bg-gray-900 border w-full h-12"
            ></textarea>
            <button
              type="submit"
              className="btn font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
