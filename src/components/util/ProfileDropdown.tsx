import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import ProfileAvatar from "@/components/util/ProfileAvatar.tsx";
import {Link} from "react-router-dom";
import {useGetUser} from "@/query/query.ts";

export default function ProfileDropdown() {
    const {data} = useGetUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ProfileAvatar/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"mr-4"} sideOffset={10}>
                <div className={"p-4 flex justify-between items-center gap-x-6"}>
                    <ProfileAvatar className={"aspect-square w-20 h-20"}/>
                    <div className={"flex flex-col gap-y-2"}>
                        <h4 className={"text font-bold"}>{data?.username}</h4>
                        <p className={"text-sm font-bold"}>{data?.email}</p>
                        <Link to={"/profile"}
                              className={"w-fit pr-2 pb-1 text-stone-700 text-sm  font-semibold border-b border-b-transparent transition-colors duration-300 hover:border-b-stone-700"}
                        >
                            My Profile
                        </Link>
                        <Link to={"/auth/logout"}
                              className={"w-fit pr-2 pb-1 text-stone-700  text-sm font-semibold border-b border-b-transparent transition-colors duration-300 hover:border-b-stone-700"}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}