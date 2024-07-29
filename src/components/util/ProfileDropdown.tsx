import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import ProfileAvatar from "@/components/util/ProfileAvatar.tsx";
import {Link} from "react-router-dom";

export default function ProfileDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfileAvatar/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"mr-4"} sideOffset={10}>
                <div className={"p-4 flex justify-between items-center gap-x-6"}>
                    <ProfileAvatar className={"aspect-square w-20 h-20"}/>
                    <div className={"flex flex-col gap-y-2"}>
                        <h4 className={"text font-bold"}>Pale Edelweiss</h4>
                        <p className={"text-sm font-bold"}>sabishinekobebe@gmail.com</p>
                        <Link to={"/profile"}>My Profile</Link>
                        <p>Sign out</p>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}