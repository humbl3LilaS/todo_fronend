import Section from "@/components/layout/Section.tsx";
import check from "/icon/check.svg";
import SectionNav from "@/components/nav/SectionNav.tsx";
import {useListStyleStore} from "@/store/listStyleStore.ts";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";
import TodoTable from "@/components/todo/TodoTable.tsx";
import TodoList from "@/components/todo/TodoList.tsx";

export default function Complete() {
    const {style} = useListStyleStore();
    const todos = useProcessedTodo({filterOption: "finished"})
    return (
        <Section>
            <SectionNav navHeader={"Complete"} iconPath={check}/>
            {style === "grid" ? <TodoTable data={todos}/> : <TodoList data={todos}/> }
        </Section>
    );
}