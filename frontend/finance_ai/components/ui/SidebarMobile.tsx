'use client';

import { useState } from "react";

import SidebarMenu from "../SidebarMenu"
import OpenSidebarMobile from "./OpenSidebarMobile"


export default function SidebarMobile(){
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-5">
            <OpenSidebarMobile openSidebar={openSidebar} sidebarVisible={setOpenSidebar} />
            <SidebarMenu openSidebar={openSidebar} sidebarVisible={setOpenSidebar} />
        </div>
    )
}