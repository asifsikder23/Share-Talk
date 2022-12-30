import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/sharetalk text logo.png";
import { AuthContext } from "../Context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      {
        user &&
        <li className="relative font-medium text-white focus:text-red-500 hover:text-red-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <a href="/">Home</a>
      </li>
      }
      {
        user &&
        <li className="relative font-medium text-white focus:text-red-500 hover:text-red-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/message"}>Message</Link>
      </li>
      }
      {
        user &&
        <li className="relative font-medium text-white focus:text-red-500 hover:text-red-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <a href="/media">Media</a>
      </li>
      }
      {user ? (
        <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
          <Link to={"/profile"}>Profile</Link>
        </li>
      ) : (
        <li>
          <Link
            to={"/signIn"}
            className="btn bg-orange-700 hover:bg-orange-600 text-white"
          >
            Sign In
          </Link>
        </li>
      )}
      <li className="relative font-medium text-white focus:text-red-500 hover:text-red-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        {user && (
          <button onClick={logOut} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        )}
      </li>
    </>
  );
  return (
    <div>
      <header aria-label="Site Header" className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 text-xl" to={"/"}>
                <div className="flex items-center gap-3">
                  <div>
                    <img className="w-28" src={logo} alt="" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">{menuItems}</ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="dropdown dropdown-left">
                  <label tabIndex={0} className="lg:hidden">
                    <div className="avatar mt-3">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {user ? (
                          <img src={user.photoURL} alt="" />
                        ) : (
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-16 p-2 shadow bg-stone-900 rounded-box w-52"
                  >
                    {menuItems}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
