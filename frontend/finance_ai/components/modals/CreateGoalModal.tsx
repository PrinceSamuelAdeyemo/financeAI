import Image from "next/image"
import { useRef, useState } from "react"
import { FileQuestionMarkIcon, FileCheckIcon } from "lucide-react"

import BaseModal from "./BaseModal"

import { CategoryType, ModalHandlerType } from "@/Types/allTypes"

export default function CreateGoalModal(
    {budgetModalOpen}: {budgetModalOpen: ModalHandlerType}
    ){

    return (
        <BaseModal modalOpen={budgetModalOpen}>
            <div className="flex flex-col gap-6 w-[90%] pt-4">
                <p className="text-center">Create your financial goal</p>
                <div>
                    <form action="" className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="goal-name" className="">Name:</label>
                            <input type="text" id="goal-name" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="target-amount" className="">Target Amount:</label>
                            <input type="text" id="target-amount" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="current-amount" className="">Current Amount:</label>
                            <input type="text" id="current-amount" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="deadline" className="">Deadline:</label>
                            <input type="date" id="deadline" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div>
                            <button type="submit" className="w-full h-10 rounded-md text-white bg-blue-400">Create Goal</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </BaseModal>
    )
}