import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState([]);

  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, [id]);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="w-1/2">
          <img src={details.images} alt="Album" />
        </div>
        <div className="card-body">
        <div className="flex items-center space-x-2">
            <img
              src={details.photo}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {details.name}
              </h2>
              <span className="inline-block text-xs leading-none dark:text-gray-400">
                {details.privacy}
              </span>
            </div>
          </div>
          <p>{details.postMessage}</p>
          <div className="card-actions justify-end">
          <div className="flex items-center space-x-3">
              <button
              
                type="button"
                title="Like post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg> <p className="mx-2">{details.like}</p>
              </button>
              
              
            </div>
            <p>{details.comment}</p>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
