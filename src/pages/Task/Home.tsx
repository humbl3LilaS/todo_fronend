import Section from "@/components/layout/Section.tsx";
import home from "/icon/home.svg";
import SectionNav from "@/components/nav/SectionNav.tsx";
import TodoInput from "@/components/form/TodoInput.tsx";
import {DateInputProvider} from "@/provider/dateInputProvider.tsx";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import Todos from "@/components/todo/Todos.tsx";
import DatePicker from "@/components/util/DatePicker.tsx";

export default function Home() {

    return (
        <Section>
            <SectionNav navHeader={"Home"} iconPath={home}>
                <SortSelectBox/>
            </SectionNav>
            <DateInputProvider>
                <TodoInput>
                    <DatePicker/>
                </TodoInput>
            </DateInputProvider>
            <Separator className={"mt-6 mb-6"}/>
            <Todos filterOption={"all"}/>
        </Section>
    )
}