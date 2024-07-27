import {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

type TSectionNav = {
    children: ReactNode;
    className?: string;
}

export default function SectionNav({children, className}: TSectionNav) {
    return (
        <nav className={cn("mb-10", className)}>
            <ul className={"flex justify-between items-center"}>
                {children}
            </ul>
        </nav>
    );
}