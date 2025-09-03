'use client';

import { useState } from "react";
import { ArrowBigDownDashIcon } from "lucide-react";
import BasePopup from "./BasePopup";

export default function HomepagePopup(){
    const [pagePopupOpen, setPagePopupOpen] = useState<boolean>(false)
    return (
        <div>
            <div className="flex justify-center items-center absolute bottom-10 right-5 h-10 w-10 bg-black rounded-full lg:hidden">
                <button onClick={() => setPagePopupOpen?.(true)} className="text-white">+</button>
            </div>
            {pagePopupOpen && 
            <BasePopup makePagePopupOpen={setPagePopupOpen}>
                <div className="w-full text-white dark:text-black">
                    <div className="flex w-full justify-center">
                        <button onClick={() => setPagePopupOpen(false)}><ArrowBigDownDashIcon /></button>
                    </div>
                </div>
            </BasePopup>}
        </div>
        
    )
}