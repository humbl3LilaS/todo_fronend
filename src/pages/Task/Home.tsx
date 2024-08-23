import Section from "@/components/layout/Section.tsx";
import home from "/icon/home.svg";
import SectionNav from "@/components/nav/SectionNav.tsx";
import TodoInput from "@/components/form/TodoInput.tsx";
import {DateInputProvider} from "@/provider/dateInputProvider.tsx";
import {useListStyleStore} from "@/store/listStyleStore.ts";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";
import TodoTable from "@/components/todo/TodoTable.tsx";
import TodoList from "@/components/todo/TodoList.tsx";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";

export default function Home() {
    const {style} = useListStyleStore();
    const todos = useProcessedTodo({filterOption: "all"})
    return (
        <Section>
            <SectionNav navHeader={"Home"} iconPath={home}>
                <SortSelectBox/>
            </SectionNav>
            <DateInputProvider>
                <TodoInput/>
            </DateInputProvider>
            {style === "grid" ? <TodoTable data={todos}/> : <TodoList data={todos}/>}
        </Section>
    )
}