import {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

type TSection = {
    className?: string;
    children: ReactNode;
}
export default function Section({className, children}: TSection) {
    return (
        <section className={cn("w-full h-full p-10", className)}>
            {children}
        </section>
    );
}