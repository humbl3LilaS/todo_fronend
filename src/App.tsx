import Login from "@/components/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hello Home page</h1>,
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
