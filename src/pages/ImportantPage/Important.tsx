import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import star from "/icon/star.svg"
import {useListStyleStore} from "@/store/listStyleStore.ts";
import {useProcessedTodo} from "@/hook/useProcessedTodo.ts";
import TodoTable from "@/components/todo/TodoTable.tsx";
import TodoList from "@/components/todo/TodoList.tsx";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";

export default function Important() {
    const {style} = useListStyleStore();
    const todos = useProcessedTodo({filterOption: "importance"})
    return (
        <Section>
            <SectionNav navHeader={"Important"} iconPath={star}>
                <SortSelectBox/>
            </SectionNav>
            {style === "grid" ? <TodoTable data={todos}/> : <TodoList data={todos}/>}
        </Section>
    );
}