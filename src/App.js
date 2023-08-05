import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppStyle = () => (
    <div className="container">
        <Header/>
        <Outlet/>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppStyle/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resid",
                element: <RestaurantMenu/>
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter}/>);
