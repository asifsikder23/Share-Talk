import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProfile = () => {

  const storedUser = useLoaderData();
  const [user, setUser] = useState();
  //   console.log(storedUser);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully Update");
          console.log(data);
          navigate("/profile");
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-900">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
            <span className="block mb-2 text-violet-400">
              Please update your information
            </span>
            <h1 className="text-5xl font-extrabold text-gray-50 mb-2">
              {storedUser?.name}
            </h1>

            <form
              onSubmit={handleUpdate}
              className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label for="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.name}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="email" className="text-sm sr-only">
                  Address
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.address}
                  id="address"
                  name="address"
                  type="text"
                  placeholder="address"
                  className="w-full rounded-md border-gray-700 p-2 text-dark"
                />
              </div>
              <div>
                <label for="institute" className="text-sm sr-only">
                  University name
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.institute}
                  id="institute"
                  name="institute"
                  type="text"
                  placeholder="Institute name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="birthdate" className="text-sm sr-only">
                  Birth Date
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.birthdate}
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  placeholder="Birth Date"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="gender" className="text-sm sr-only">
                  Gender
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.gender}
                  id="gender"
                  name="gender"
                  type="text"
                  placeholder="Gender"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="description" className="text-sm sr-only">
                  Description
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.description}
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="coverImg" className="text-sm sr-only">
                  Cover Image URL
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.coverImg}
                  id="coverImg"
                  name="coverImg"
                  type="text"
                  placeholder="coverImg"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="photo" className="text-sm sr-only">
                  Profile Photo URL
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.photo}
                  id="photo"
                  name="photo"
                  type="text"
                  placeholder="photo"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
          <img
            src="https://img.etimg.com/thumb/msid-84146056,width-1200,height-900,imgsize-638053,resizemode-8,quality-100/20210706_developer-economy_01.jpg"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
