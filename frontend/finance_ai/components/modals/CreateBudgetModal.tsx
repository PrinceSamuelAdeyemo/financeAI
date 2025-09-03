import Image from "next/image"
import { useRef, useState } from "react"
import { FileQuestionMarkIcon, FileCheckIcon } from "lucide-react"

import BaseModal from "./BaseModal"

import { CategoryType, ModalHandlerType } from "@/Types/allTypes"

export default function CreateBudgetModal(
    {budgetModalOpen}: {budgetModalOpen: ModalHandlerType}
    ){

    return (
        <BaseModal modalOpen={budgetModalOpen}>
            <div className="flex flex-col gap-6 w-[90%] pt-4">
                <p className="text-center">Create your financial budget</p>
                <div>
                    <form action="" className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="budget-name" className="">Name:</label>
                            <input type="text" id="budget-name" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="category" className="">Type:</label>
                            <select id="category" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required >
                                <option value="rent">Rent</option>
                                <option value="transport">Transport</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="amount" className="">Amount:</label>
                            <input type="text" id="amount" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="budget-name" className="">Name:</label>
                            <input type="date" id="start-date" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="budget-name" className="">Name:</label>
                            <input type="date" id="end-date" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div>
                            <button type="submit" className="w-full h-10 rounded-md text-white bg-blue-400">Create Category</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </BaseModal>
    )
}