import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useUpdateTodo} from "@/query/mutation.ts";

type TTodoCheckBoxProps = {
    id: string;
}

export default function TodoCheckBox({id}: TTodoCheckBoxProps) {
    const {mutateAsync} = useUpdateTodo();
    const handler = async () => {
        await mutateAsync({id, payload: {isFinished: true}});
    }
    return (
        <Checkbox
            onCheckedChange={handler}
            aria-label={"Select row"}
            key={id}
        />
    )
}