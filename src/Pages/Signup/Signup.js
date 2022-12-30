import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../Assets/sharetalk text logo.png";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../Hook/UseToken";

const Signup = () => {
  const { googleSignIn, auth, createUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const location = useLocation();

  if(token){
    navigate('/')
  }

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        saveSocialUser(user.displayName, user.email, user.gender)
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };
    const saveSocialUser = (name , email) =>{
      const user = {name , email , gender:'none', description:'description', coverImg:'coverImg', address:'address', institute:'institute', birthdate:'birthdate'};
      fetch('http://localhost:5000/users', {
          method: 'POST' ,
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
      }).then(res => res.json())
      .then(data =>{
        setCreatedUserEmail(email);
          console.log('test',data);

      })
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const gender = form.userType.value;
    const password = form.password.value;
    const description = "Description";
    const coverImg = "coverImg";
    const address = "address";
    const institute = "institute";
    const birthdate = "birthdate";

    console.log(gender);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUser(name, photo, gender, email, description, coverImg, address, institute, birthdate);
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  const updateUser = (name, photo, gender, email, description, coverImg, address, institute, birthdate) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        saveUser(name, email, gender, photo, description, coverImg, address, institute, birthdate)
        console.log("display name updated");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
    const saveUser = (name , email , gender, photo, description, coverImg, address, institute, birthdate) =>{
      const user = {name , email , gender, photo, description, coverImg, address, institute, birthdate};
      fetch('http://localhost:5000/users', {
          method: 'POST' ,
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
      }).then(res => res.json())
      .then(data =>{
        setCreatedUserEmail(email);
          console.log('test',data);

      })
  }
  return (
    <div>
      <section className="dark:bg-zinc-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://lifeinmotion.com/wp-content/uploads/2020/09/giphy.gif"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="block lg:hidden">
                <img className="h-8 sm:h-10" src={logo} alt="" />

                <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Welcome to Share-Talk
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Social media are interactive media technologies that
                  facilitate the creation and sharing of information, ideas,
                  interests, and other forms of expression through virtual
                  communities and networks.
                </p>
              </div>

              <section>
                <div className="p-4 rounded-md shadow sm:p-8 dark:text-gray-100">
                  <div className="flex justify-center my-5">
                    <img className="h-8 sm:h-10" src={logo} alt="" />
                  </div>
                  <h2 className="mb-3 text-3xl font-semibold text-center">
                    SignUp to your account
                  </h2>
                  <p className="text-sm text-center dark:text-gray-400">
                    Already have account?
                    <Link
                      to={"/signIn"}
                      className="focus:underline hover:underline ml-3"
                    >
                      Sign in here
                    </Link>
                  </p>
                  <div className="my-6 space-y-4">
                    <button
                      onClick={handleGoogleLogIn}
                      aria-label="Login with Google"
                      type="button"
                      className="btn w-full gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                      </svg>
                      <p>SignUp with Google</p>
                    </button>
                  </div>
                  <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                  </div>
                  <form
                    onSubmit={handleSignUp}
                    className="space-y-8 ng-untouched ng-pristine ng-valid"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="John Deo"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                        />
                      </div>
                      <div className="space-y-2 ">
                        <label className="block text-sm">Gender</label>
                        <select
                          name="userType"
                          className="select select-bordered w-full max-w-xs px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-200 bg-zinc-900"
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>None</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm">Photo URL</label>
                        <input
                          type="check"
                          name="photo"
                          id="photo"
                          placeholder="https://scontent.fdac145-1.fna.fbcdn.net"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm">Email address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="leroy@jenkins.com"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm">Password</label>
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="*****"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                        />
                      </div>
                    </div>
                    <button type="submit" className="w-full btn">
                      Sign up
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Signup;
