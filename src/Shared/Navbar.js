import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/sharetalk text logo.png"
// import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/blog"}>Message</Link>
      </li>
      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/about"}>Media</Link>
      </li>
      {/* {
        user ?
        <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <label
          htmlFor="my-modal-4"
        >
          Profile
        </label>
      </li>
      :
      <li>
        <Link to={'/login'} className="btn text-white">
          Log In
        </Link>
      </li>
      } */}
      
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
                        {/* {user ? (
                          <img src={user.photoURL} alt="" />
                        ) : (
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                            alt=""
                          />
                        )} */}
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

              {/* {user && (
                <div>
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle "
                  />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                      <div className="justify-between sm:flex">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {user.displayName}
                          </h3>

                          <p className="mt-1 text-xs font-medium text-gray-600">
                            {user.email}
                          </p>
                        </div>

                        <div className="ml-3 hidden flex-shrink-0 sm:block">
                          <img
                            alt="Paul Clapton"
                            src={user.photoURL}
                            className="h-16 w-16 rounded-lg object-cover shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                          Hi! I am {user.displayName}, a web designer/developer
                          focused on crafting great web experiences. Designing
                          and Coding have been my passion since the days I
                          started working with computers but I found myself into
                          web design/development since 2016. I enjoy creating
                          beautifully designed, intuitive and functional
                          websites.
                        </p>
                      </div>

                      <div className="mt-6 flex justify-between">
                        <div className="flex flex-col-reverse">
                          <dt className="text-sm font-medium text-gray-600">
                            Birth Date
                          </dt>
                          <dd className="text-xs text-gray-500">
                            22nd Nov, 1998
                          </dd>
                        </div>
                        <div>
                        {user && <button
                        onClick={logOut}
                        className="btn"
                        >log out</button>}
                        </div>
                      </div>
                    </label>
                  </label>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
