import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import EditProfile from "../Pages/About/EditProfile";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import PostDetails from "../Pages/Media/PostDetails";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/profile',
                element: <About></About>
            },
            {
                path: '/editProfile/:id',
                element: <EditProfile></EditProfile>,
                loader: ({params})=>fetch(`http://localhost:5000/user/${params.id}`),
            },
            {
                path: '/posts/:id',
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>
            },
            {
                path: '/media',
                element: <Media></Media>
            }
            
        ]
    }
])
export default router;