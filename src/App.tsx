import Login from "@/pages/AuthPage/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/pages/HomePage/Home.tsx";

import {QueryClient, QueryClientProvider} from "react-query";

import React from "react";

import SignUp from "@/pages/AuthPage/SignUp.tsx";
import {ReactQueryDevtools} from "react-query/devtools";
import Layout from "@/components/Layout.tsx";


const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
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
