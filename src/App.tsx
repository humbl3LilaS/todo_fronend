import Login from "@/components/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/components/Home/Home.tsx";

import {QueryClient, QueryClientProvider} from "react-query";

import React from "react";
import {Toaster} from "@/components/ui/toaster.tsx";


const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>
    }

]);


function App() {


    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
}

export default App;
