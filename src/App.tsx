import Login from "@/pages/AuthPage/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MyDay from "@/pages/HomePage/MyDay.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import SignUp from "@/pages/AuthPage/SignUp.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Important from "@/pages/ImportantPage/Important.tsx";
import Upcoming from "@/pages/UpcomingPage/Upcoming.tsx";
import Complete from "@/pages/CompletedPage/Complete.tsx";
import Home from "@/pages/Task/Home.tsx";
import {authLoader, authRouteGuard, logoutLoader} from "@/loader/logoutLoader.ts";
import ErrorPage from "@/pages/ErrorPage/404.tsx";


const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: authLoader,
            },
            {
                path: "myday",
                element: <MyDay/>,
                loader: authLoader,
            },
            {
                path: "important",
                element: <Important/>,
                loader: authLoader,
            },
            {
                path: "upcoming",
                element: <Upcoming/>,
                loader: authLoader,
            },
            {
                path: "completed",
                element: <Complete/>,
                loader: authLoader,
            },
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
    console.log("app start")
    console.log(import.meta.env.API_ENDPOINT)
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            {/*<ReactQueryDevtools/>*/}
        </QueryClientProvider>
    );
}

export default App;
