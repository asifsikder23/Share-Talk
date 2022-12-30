import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Loader from "../Loader/Loader";
import "./About.css";
import EditProfile from "./EditProfile";

const About = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [showEditTask, setShowEditTask] = useState(null);

  const {
    data: info = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["info", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user?email=${user?.email}`,
        {
          headers: {},
        }
      );
      const data = await res.json();

      refetch();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  const editTask = (info) => {
    console.log(info);
    setShowEditTask(info);
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <div>
        <main className="profile-page">
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${info?.coverImg})` }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px trans">
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={info?.photo}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px ring ring-indigo-600 ring-offset-base-100 ring-offset-2 w-48"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      {user ? (
                        <Link
                          to={`/editProfile/${info?._id}`}
                          onClick={() => editTask(info)}
                        >
                          <div className="flex justify-center">
                          <button className=" bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 mt-28 md:mt-0 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                            Edit Profile
                          </button>
                          </div>
                        </Link>
                      ) : (
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                          <button
                            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Connect
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            22
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Friends
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            10
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Photos
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                      {info?.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      {info?.email}
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {info?.address}
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      {info?.institute}
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      <i className="fa-solid fa-cake-candles mr-2 text-lg text-blueGray-400"></i>
                      {info?.birthdate}
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      <i className="fa-solid fa-venus-mars mr-2 text-lg text-blueGray-400"></i>
                      {info?.gender}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {info?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </section>
        </main>
      </div>
      {showEditTask && (
        <EditProfile info={showEditTask} setShowEditTask={setShowEditTask} />
      )}
    </div>
  );
};

export default About;
