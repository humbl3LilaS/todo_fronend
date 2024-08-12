import {useGetAllTodo} from "@/query/query.ts";
import Section from "@/components/layout/Section.tsx";
import SectionNav from "@/components/nav/SectionNav.tsx";
import sun from "/icon/sun.svg";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";


export default function Home() {
    useCheckJwtKey();
    const {data} = useGetAllTodo();
    return (
        <Section>
            <SectionNav navHeader={"My Day"} iconPath={sun}>
                <SortSelectBox/>
            </SectionNav>
            {data && data.map(item => <h2 key={item._id}>{item.content}</h2>)}
        </Section>
    );
}