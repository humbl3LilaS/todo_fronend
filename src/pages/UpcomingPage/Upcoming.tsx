import Section from "@/components/layout/Section.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import {Link} from "react-router-dom";
import SectionNav from "@/components/nav/SectionNav.tsx";
import calendar from "/icon/calendar.svg";

export default function Upcoming() {
    return (
        <Section>
            <SectionNav>
                <NavItem path={calendar}>
                    <Link to={"/important"} className={"text-xl font-bold"}>
                        Upcoming
                    </Link>
                </NavItem>
            </SectionNav>
        </Section>
    );
}