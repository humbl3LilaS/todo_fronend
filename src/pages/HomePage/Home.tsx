import {useGetAllTodo} from "@/query/query.ts";
import Section from "@/components/Util/Section.tsx";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";
import SectionNav from "@/components/nav/SectionNav.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import sun from "/icon/sun.svg";
import {Link} from "react-router-dom";


export default function Home() {
    useCheckJwtKey();
    const {data} = useGetAllTodo();

    return (
        <Section>
            <SectionNav>
                <NavItem path={sun}>
                    <Link to={"/"} className={"font-bold text-xl"}>My day</Link>
                </NavItem>
            </SectionNav>
            {data && data.map(item => <h2 key={item._id}>{item.content}</h2>)}
        </Section>
    );
}