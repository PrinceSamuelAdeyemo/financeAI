'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import { ModalHandlerType } from "@/Types/allTypes";

import BaseModal from "./modals/BaseModal";
import CreateCategoryModal from "./modals/CreateCategoryModal";
import Transaction_Receipt_Buttons from "./Transaction_Receipt_Buttons";


export default function QuickActionButtonDashboard(){
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);
    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState<boolean>(false);
    const [isSetgoalModalOpen, setIsSetgoalModalOpen] = useState<boolean>(false);

    
    return (
        <div className="flex flex-col gap-2">
            <Transaction_Receipt_Buttons openCreateCategoryModal={setIsCategoryModalOpen} />
            <div className="flex gap-2 w-full">
                <button className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                    <Image src="" alt="" />
                    <p>Create Budget</p>
                </button>
                <button className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                    <p>Set Goal</p>
                </button>
            </div>
            {/* {isModalOpen && <BaseModal modalOpen={setIsModalOpen} />} */}
            {isCategoryModalOpen && <CreateCategoryModal categoryModalOpen={setIsCategoryModalOpen} />}
        </div>
    )
}