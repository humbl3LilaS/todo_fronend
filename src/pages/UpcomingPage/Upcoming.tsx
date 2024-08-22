import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import calendar from "/icon/calendar.svg";
import {useListStyleStore} from "@/store/listStyleStore.ts";
import TodoTable from "@/components/todo/TodoTable.tsx";
import TodoList from "@/components/todo/TodoList.tsx";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";

export default function Upcoming() {
    const {style} = useListStyleStore();
    const todos = useProcessedTodo({filterOption: "upcoming"})
    return (
        <Section>
            <SectionNav navHeader={"Upcoming"} iconPath={calendar}/>
            {style === "grid" ? <TodoTable data={todos}/> : <TodoList data={todos}/>}
        </Section>
    );
}