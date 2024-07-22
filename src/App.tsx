import Login from "@/components/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/pages/HomePage/Home.tsx";

import {QueryClient, QueryClientProvider} from "react-query";

import React from "react";

import SignUp from "@/pages/LoginPage/SignUp.tsx";
import {ReactQueryDevtools} from "react-query/devtools";


const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
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
