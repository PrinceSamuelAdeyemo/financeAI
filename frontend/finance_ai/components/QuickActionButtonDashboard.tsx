'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { ModalHandlerType } from "@/Types/allTypes";

import BaseModal from "./modals/BaseModal";
import Transaction_Receipt_Buttons from "./Transaction_Receipt_Buttons";


export default function QuickActionButtonDashboard(){
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openCreateCategoryModal = (isModalOpen: boolean) => {
        setIsModalOpen(true);
    }

    const openCreateBudgetModal = () => {
        alert("Hello")
    }

    return (
        <div className="flex flex-col gap-2">
            <Transaction_Receipt_Buttons openModalFunc={setIsModalOpen} />
            <div className="flex gap-2 w-full">
                <button onClick={() => setIsModalOpen(true)} className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                    <Image src="" alt="" />
                    <p>Create Budget</p>
                </button>
                <button onClick={() => setIsModalOpen(true)} className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                    <p>Set Goal</p>
                </button>
            </div>
            {isModalOpen && <BaseModal isOpenModal={setIsModalOpen} />}
        </div>
    )
}