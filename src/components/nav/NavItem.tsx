import {ReactNode} from "react";

type TNavItem = {
    path: string;
    children: ReactNode;
}
export default function NavItem({path, children}: TNavItem) {
    return (
        <li className={"flex justify-start items-center gap-x-5"}>
            <img src={path} alt={"Nav item icon"}/>
            <span>{children}</span>
        </li>
    );
}