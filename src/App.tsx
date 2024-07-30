import Login from "@/pages/AuthPage/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/pages/HomePage/Home.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import SignUp from "@/pages/AuthPage/SignUp.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Important from "@/pages/ImportantPage/Important.tsx";
import Upcoming from "@/pages/UpcomingPage/Upcoming.tsx";
import Complete from "@/pages/CompletedPage/Complete.tsx";
import Task from "@/pages/Task/Task.tsx";
import {authRouteGuard, logoutLoader} from "@/loader/logoutLoader.ts";


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
                path: "important",
                element: <Important/>
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
                path: "task",
                element: <Task/>
            }
        ]
    },
    {
        path: "/auth",
        children: [
            {path: "login", element: <Login/>, loader: authRouteGuard},
            {path: "signup", element: <SignUp/>, loader: authRouteGuard},
            {path: "logout", loader: logoutLoader}
        ]
    }

]);


function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            {/*<ReactQueryDevtools/>*/}
        </QueryClientProvider>
    );
}

export default App;
