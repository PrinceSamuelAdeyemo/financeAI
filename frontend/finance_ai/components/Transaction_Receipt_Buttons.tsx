import Image from "next/image"
import { ModalHandlerType } from "@/Types/allTypes"

export default function Transaction_Receipt_Buttons({openModal}: ModalHandlerType){
    return (
        <div className="flex gap-2 w-full">
            <div className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2 bg-purple-900">
                <p className="text-white">+</p>
                <p className="text-white">Add Transaction</p>
            </div>
            <button onClick={()=> openModal} className="flex flex-col justify-center items-center border-1 border-gray-200 rounded-xl h-[10vh] w-1/2">
                <Image src="" alt="" />
                <p>Create Category</p>
            </button>
        </div>
    )
}