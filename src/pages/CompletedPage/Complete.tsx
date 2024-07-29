import Section from "@/components/layout/Section.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import check from "/icon/check.svg";
import {Link} from "react-router-dom";
import SectionNav from "@/components/nav/SectionNav.tsx";

export default function Complete() {
    return (
        <Section>
            <SectionNav>
                <NavItem path={check}>
                    <Link to={"/important"} className={"text-xl font-bold"}>
                        Completed
                    </Link>
                </NavItem>
            </SectionNav>
        </Section>
    );
}