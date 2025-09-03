
import { MenuIcon } from "lucide-react";
import { ModalHandlerType } from "@/Types/allTypes";

export default function OpenSidebarMobile({openSidebar, sidebarVisible}: {openSidebar:boolean, sidebarVisible: ModalHandlerType}){

    return (
        <div className="flex justify-center items-center absolute -top-10 left-2 lg:hidden">
            <button onClick={() => sidebarVisible?.(true)}>
                <MenuIcon />
            </button>
        </div>
    )
}