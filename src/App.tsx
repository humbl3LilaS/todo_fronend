import Login from "@/components/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/components/Home/Home.tsx";

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
        <RouterProvider router={router}/>
    );
}

export default App;
