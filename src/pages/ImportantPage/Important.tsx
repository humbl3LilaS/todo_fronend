import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import star from "/icon/star.svg"
import SortSelectBox from "@/components/util/SortSelectBox.tsx";
import Todos from "@/components/todo/Todos.tsx";

export default function Important() {

    return (
        <Section>
            <SectionNav navHeader={"Important"} iconPath={star}>
                <SortSelectBox/>
            </SectionNav>
            <Todos filterOption={"importance"}/>
        </Section>
    );
}