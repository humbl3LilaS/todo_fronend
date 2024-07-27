import {useGetAllTodo} from "@/query/query.ts";
import Section from "@/components/Util/Section.tsx";
import {useCheckJwtKey} from "@/hook/useCheckJwtKey.ts";

export default function Home() {
    useCheckJwtKey();
    const {data} = useGetAllTodo();

    return (
        <Section className={"bg-emerald-200"}>
            <h1>Home</h1>
            {data && data.map(item => <h2 key={item._id}>{item.content}</h2>)}
        </Section>
    );
}