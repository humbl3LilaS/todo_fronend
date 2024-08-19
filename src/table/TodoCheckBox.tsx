import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useUpdateTodo} from "@/query/mutation.ts";
import {cn} from "@/lib/utils.ts";

type TTodoCheckBoxProps = {
    id: string;
    className?: string;
}

export default function TodoCheckBox({id, className}: TTodoCheckBoxProps) {
    const {mutateAsync} = useUpdateTodo();
    const handler = async () => {
        await mutateAsync({id, payload: {isFinished: true}});
    }
    return (
        <Checkbox
            onCheckedChange={handler}
            aria-label={"Select row"}
            key={id}
            className={cn(className)}
        />
    )
}