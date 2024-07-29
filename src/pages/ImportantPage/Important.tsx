import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import star from "/icon/star.svg"
import {Link} from "react-router-dom";

export default function Important() {
    return (
        <Section>
            <SectionNav>
                <NavItem path={star}>
                    <Link to={"/important"} className={"text-xl font-bold"}>
                        Important
                    </Link>
                </NavItem>
            </SectionNav>
        </Section>
    );
}