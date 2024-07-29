import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {cn} from "@/lib/utils.ts";

type TProfileAvatar = {
    className?: string;
}

export default function ProfileAvatar({className}: TProfileAvatar) {
    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={""} alt={"profile img"}/>
            <AvatarFallback>ED</AvatarFallback>
        </Avatar>
    );
}