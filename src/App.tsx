import Login from "@/pages/AuthPage/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/pages/HomePage/Home.tsx";

import {QueryClient, QueryClientProvider} from "react-query";

import React from "react";

import SignUp from "@/pages/AuthPage/SignUp.tsx";
import {ReactQueryDevtools} from "react-query/devtools";
import Layout from "@/components/Layout.tsx";
import Today from "@/pages/TodayPage/Today.tsx";
import Upcoming from "@/pages/UpcomingPage/Upcoming.tsx";
import Complete from "@/pages/CompletedPage/Complete.tsx";
import Trash from "@/pages/TrashPage/Trash.tsx";


const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "today",
                element: <Today/>
            },
            {
                path: "upcoming",
                element: <Upcoming/>
            },
            {
                path: "completed",
                element: <Complete/>
            },
            {
                path: "trash",
                element: <Trash/>
            }
        ]
    },
    {
        path: "/auth",
        children: [
            {path: "login", element: <Login/>},
            {path: "signup", element: <SignUp/>}

        ]
    }

]);


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

export default App;
