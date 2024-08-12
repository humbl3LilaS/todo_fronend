import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import star from "/icon/star.svg"

export default function Important() {
    return (
        <Section>
            <SectionNav navHeader={"Important"} iconPath={star}/>
        </Section>
    );
}