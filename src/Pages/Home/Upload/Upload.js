import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";

const Upload = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddPost = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=${"b9b258b2d7931dedd2b31dda9078c475"}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addPost = {
            email: user.email,
            privacy: data.privacy,
            postMessage: data.message,
            name: user.displayName,
            photo: user.photoURL,
            like: 0,
            images: imgData.data.url,
            time: new Date(),
          };
          console.log(addPost);
          fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addPost),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              alert("Post successfully");
            });
        }
      });
  };
  return (
    <div className="border">
      <div className="text-white">
        
        <div className="max-w-4xl p-8 mx-auto  rounded-md">
          <form onSubmit={handleSubmit(handleAddPost)}>
            <div className="mt-4 items-center">
              <div>
                <label
                  htmlFor="message"
                  className="block dark:text-gray-400"
                ></label>
                <textarea
                  {...register("message", { required: "message is Required" })}
                  name="message"
                  placeholder="Write on your mind......"
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                />
              </div>
              <div className="flex justify-between items-center gap-5">
                <div>
                  <label htmlFor="img" className="block dark:text-gray-400">
                    Upload Photo
                  </label>
                  <input
                    {...register("image", {
                      required: true,
                    })}
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    placeholder="Enter Your "
                    className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="privacy"
                    className="block dark:text-gray-400 mt-6"
                  >
                  </label>
                  <select
                    {...register("privacy", { required: true })}
                    className="select select-bordered bg-stone-900 border-white"
                  >
                    <option value="Public">Public</option>
                    <option value="Friends">Friends</option>
                    <option value="Only Me">Only Me</option>
                  </select>
                </div>
              </div>

              <button
                className="btn bg-orange-800 w-full py-2 px-8 mt-6 text-gray-100"
                type="submit"
              >
                {" "}
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
