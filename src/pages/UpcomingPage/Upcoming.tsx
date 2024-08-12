import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import calendar from "/icon/calendar.svg";

export default function Upcoming() {
    return (
        <Section>
            <SectionNav navHeader={"Upcoming"} iconPath={calendar}/>
        </Section>
    );
}