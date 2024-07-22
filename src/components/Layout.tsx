import {Outlet} from "react-router-dom";
import SideNav from "@/components/SideNav/SideNav.tsx";

export default function Layout() {
    return (
        <div className={"w-screen h-screen flex"}>
            <SideNav/>
            <Outlet/>
        </div>
    );
}