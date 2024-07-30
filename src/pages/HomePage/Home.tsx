import {useGetAllTodo} from "@/query/query.ts";
import Section from "@/components/layout/Section.tsx";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";
import SectionNav from "@/components/nav/SectionNav.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import sun from "/icon/sun.svg";
import {Link} from "react-router-dom";
import SortBtn from "@/components/button/SortBtn.tsx";
import SortSelectBox from "@/components/util/SortSelectBox.tsx";


export default function Home() {
    useCheckJwtKey();
    const {data} = useGetAllTodo();

    return (
        <Section>
            <SectionNav>
                <NavItem path={sun}>
                    <Link to={"/"} className={"font-bold text-xl"}>My day</Link>
                </NavItem>
                <SortSelectBox/>
            </SectionNav>
            {data && data.map(item => <h2 key={item._id}>{item.content}</h2>)}
        </Section>
    );
}