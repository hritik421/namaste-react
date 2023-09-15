import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import {appStore} from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppStyle = () => (
    <Provider store={appStore}>
        <div className="container">
            <Header/>
            <Outlet/>
        </div>
    </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter}/>);
