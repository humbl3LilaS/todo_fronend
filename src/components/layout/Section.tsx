import {ReactNode} from "react";
import {cn} from "@/lib/utils.ts";

type TSection = {
    className?: string;
    children: ReactNode;
}
export default function Section({className, children}: TSection) {
    return (
        <section className={cn("w-full h-full px-10 py-4", className)}>
            {children}
        </section>
    );
}