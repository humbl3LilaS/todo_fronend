import ProfileDropdown from "@/components/util/ProfileDropdown.tsx";

export default function ToolBar() {
    return (
        <div className={"py-6"}>
            <ul className={"flex justify-end items-center"}>
                {/*TODO:Add theme switcher here*/}
                <ProfileDropdown/>
            </ul>
        </div>
    );
}