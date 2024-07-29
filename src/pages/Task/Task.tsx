import Section from "@/components/layout/Section.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import home from "/icon/home.svg";
import {Link} from "react-router-dom";
import SectionNav from "@/components/nav/SectionNav.tsx";

export default function Task(){
    return (
        <Section>
            <SectionNav>
                <NavItem path={home}>
                    <Link to={"/important"} className={"text-xl font-bold"}>
                        Task
                    </Link>
                </NavItem>
            </SectionNav>
        </Section>
    )
}