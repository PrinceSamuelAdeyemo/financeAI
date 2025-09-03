import Image from "next/image"

import CreateCategoryModal from "./modals/CreateCategoryModal"
import { ModalHandlerType } from "@/Types/allTypes"

export default function Transaction_Receipt_Buttons({openCreateCategoryModal}: {openCreateCategoryModal?: ModalHandlerType}){
    
    return (
        <div className="flex gap-2 w-full">
            <button className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2 bg-purple-900">
                <p className="text-white">+</p>
                <p className="text-white">Add Transaction</p>
            </button>
            <button onClick={() => openCreateCategoryModal?.(true)} className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                <Image src="" alt="" />
                <p>Create Category</p>
            </button>
        </div>
    )
}