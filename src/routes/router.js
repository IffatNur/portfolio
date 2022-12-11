import { createBrowserRouter } from "react-router-dom";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path: '/project/:id',
        element: <Details></Details>,
        loader: () => fetch('projects.json')
    }
])