import NavItem from "@/components/nav/NavItem.tsx";
import sun from "/icon/sun.svg";
import check from "/icon/check.svg";
import calendar from "/icon/calendar.svg";
import star from "/icon/star.svg";
import home from "/icon/home.svg";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.tsx";


export default function SideNav() {
    return (
        <aside className={"w-1/5 py-10 px-6 border-r border-r-stone-400"}>
            <div>
                <ul className={"*:mb-6"}>
                    <NavItem path={sun}>
                        <Link to={"/"}>My day</Link>
                    </NavItem>
                    <NavItem path={star}>
                        <Link to={"/important"}>Important</Link>
                    </NavItem>
                    <NavItem path={calendar}>
                        <Link to={"/upcoming"}>Upcoming</Link>
                    </NavItem>
                    <NavItem path={check}>
                        <Link to={"/completed"}>Completed</Link>
                    </NavItem>
                    <NavItem path={home}>
                        <Link to={"/task"}>Task</Link>
                    </NavItem>
                </ul>
                <Separator className={"bg-stone-800"}/>
                {/*Todo: Render List*/}
            </div>
        </aside>
    );
}