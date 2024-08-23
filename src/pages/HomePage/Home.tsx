import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import sun from "/icon/sun.svg";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";
import TodoTable from "@/components/todo/TodoTable.tsx";
import {useListStyleStore} from "@/store/listStyleStore.ts";
import TodoList from "@/components/todo/TodoList.tsx";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";
import {DateInputProvider} from "@/provider/dateInputProvider.tsx";
import TodoInput from "@/components/form/TodoInput.tsx";



export default function Home() {
    const {style} = useListStyleStore();
    const todos = useProcessedTodo({filterOption: "unfinished"})

    return (
        <Section>
            <SectionNav navHeader={"My Day"} iconPath={sun}>
                <SortSelectBox/>
            </SectionNav>
            <DateInputProvider>
                <TodoInput/>
            </DateInputProvider>
            {style === "grid" ? <TodoTable data={todos}/> : <TodoList data={todos}/>}
        </Section>
    );
}