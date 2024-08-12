import Section from "@/components/layout/Section.tsx";
import check from "/icon/check.svg";
import SectionNav from "@/components/nav/SectionNav.tsx";

export default function Complete() {
    return (
        <Section>
            <SectionNav navHeader={"Complete"} iconPath={check}/>

        </Section>
    );
}