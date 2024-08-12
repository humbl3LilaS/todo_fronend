import Section from "@/components/layout/Section.tsx";
import home from "/icon/home.svg";
import SectionNav from "@/components/nav/SectionNav.tsx";

export default function Task(){
    return (
        <Section>
            <SectionNav navHeader={"Task"} iconPath={home} />
        </Section>
    )
}