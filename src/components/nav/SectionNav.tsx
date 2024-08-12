import {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";
import ToolBar from "@/components/layout/ToolBar.tsx";
import NavItem from "@/components/nav/NavItem.tsx";

import {Link} from "react-router-dom";
import ListStyleSelector from "@/components/layout/ListStyleSelector.tsx";

type TSectionNav = {
    children?: ReactNode;
    className?: string;
    navHeader: string;
    iconPath: string;
}

export default function SectionNav({children, className, navHeader, iconPath}: TSectionNav) {
    return (
        <nav className={cn("mb-10", className)}>
            <ToolBar/>
            <ul className={"flex justify-between items-center"}>
                <ul className={"flex gap-x-4"}>
                    <NavItem path={iconPath}>
                        <Link to={"/"} className={"font-bold text-xl"}>{navHeader}</Link>
                    </NavItem>
                    <ListStyleSelector/>
                </ul>
                {children}
            </ul>
        </nav>
    );
}