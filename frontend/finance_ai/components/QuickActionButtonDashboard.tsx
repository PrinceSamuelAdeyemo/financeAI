import Image from "next/image";
import { ModalHandlerType } from "@/Types/allTypes";

import Transaction_Receipt_Buttons from "./Transaction_Receipt_Buttons";


export default function QuickActionButtonDashboard({ openModal }: ModalHandlerType){
    return (
        <div className="flex flex-col gap-2">
            <Transaction_Receipt_Buttons openModal={openModal} />
            <div className="flex gap-2 w-full">
                <div className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                    <Image src="" alt="" />
                    <p>Create Budget</p>
                </div>
                <div className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                    <p>Set Goal</p>
                </div>
            </div>
        </div>
    )
}