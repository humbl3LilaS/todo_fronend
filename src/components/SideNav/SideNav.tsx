import NavItem from "@/components/SideNav/NavItem.tsx";
import home from "/icon/home.svg";
import check from "/icon/check.svg";
import calendar from "/icon/calendar.svg";
import star from "/icon/star.svg";
import trash from "/icon/trash.svg";
import {Link} from "react-router-dom";


export default function SideNav() {
    return (
        <aside className={"w-1/5 py-10 px-6 border-r border-r-stone-400"}>
            <div>
                <ul className={"*:mb-10 "}>
                    <NavItem path={home}>
                        <Link to={"/"}>Home</Link>
                    </NavItem>
                    <NavItem path={star}>
                        <Link to={"/today"}>Today</Link>
                    </NavItem>
                    <NavItem path={calendar}>
                        <Link to={"/upcoming"}>Upcoming</Link>
                    </NavItem>
                    <NavItem path={check}>
                        <Link to={"/completed"}>Completed</Link>
                    </NavItem>
                    <NavItem path={trash}>
                        <Link to={"/trash"}>Trash</Link>
                    </NavItem>

                </ul>
            </div>
        </aside>
    );
}