import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Sheared/Error";
import Home from "../Pages/Home/Home";
import TastesRates from "../Pages/TastesRates/TastesRates";
import Experts from "../Pages/Experts";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/testsrates',
                element: <TastesRates></TastesRates>
            },
            {
                path: '/experts',
                element: <Experts></Experts>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }])