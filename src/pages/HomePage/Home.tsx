import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import sun from "/icon/sun.svg";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";
import TodoInput from "@/components/form/TodoInput.tsx";
import TodoTable from "@/components/todo/TodoTable.tsx";
import {DateInputProvider} from "@/provider/dateInputProvider.tsx";
import {useListStyleStore} from "@/store/listStyleStore.ts";
import TodoList from "@/components/todo/TodoList.tsx";
import {useGetAllTodo} from "@/query/query.ts";


export default function Home() {
    useCheckJwtKey();
    const {data} = useGetAllTodo();
    const {style} = useListStyleStore();
    return (
        <Section>
            <SectionNav navHeader={"My Day"} iconPath={sun}>
                <SortSelectBox/>
            </SectionNav>
            <DateInputProvider>
                <TodoInput/>
            </DateInputProvider>
            {style === "grid" ? <TodoTable/> : <TodoList/>}
        </Section>
    );
}