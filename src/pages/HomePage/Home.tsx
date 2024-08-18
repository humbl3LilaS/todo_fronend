import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import sun from "/icon/sun.svg";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";
import TodoInput from "@/components/form/TodoInput.tsx";
import TodoListTable from "@/components/todo/TodoListTable.tsx";
import {DateInputProvider} from "@/provider/dateInputProvider.tsx";


export default function Home() {
    useCheckJwtKey();
    return (
        <Section>
            <SectionNav navHeader={"My Day"} iconPath={sun}>
                <SortSelectBox/>
            </SectionNav>
            <DateInputProvider>
                <TodoInput/>
            </DateInputProvider>
            <TodoListTable/>
        </Section>
    );
}