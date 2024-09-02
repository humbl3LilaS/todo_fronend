import Section from "@/components/layout/Section.tsx";
import check from "/icon/check.svg";
import SectionNav from "@/components/nav/SectionNav.tsx";
import Todos from "@/components/todo/Todos.tsx";

export default function Complete() {

    return (
        <Section>
            <SectionNav navHeader={"Completed"} iconPath={check}/>
            <Todos filterOption={"finished"}/>
        </Section>
    );
}