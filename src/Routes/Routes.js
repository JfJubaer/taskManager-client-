import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Component/AddTask";
import Completed from "../Component/Completed";
import Details from "../Component/Details";
import Home from "../Component/Home";
import Login from "../Component/Login";
import MyTask from "../Component/MyTask";
import Reg from "../Component/Reg";
import Main from "../Layout/Main";
import Private from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add',
                element: <Private><AddTask></AddTask></Private>
            },
            {
                path: '/details/:id',
                element: <Private><Details></Details></Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
            },
            {
                path: '/my',
                element: <Private><MyTask></MyTask></Private>
            },
            {
                path: '/complete',
                element: <Private><Completed></Completed></Private>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            },
        ]
    }
])