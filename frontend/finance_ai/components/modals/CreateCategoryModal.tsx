import Image from "next/image"
import { useRef, useState } from "react"
import { FileQuestionMarkIcon, FileCheckIcon } from "lucide-react"

import BaseModal from "./BaseModal"

import { CategoryType, ModalHandlerType } from "@/Types/allTypes"

export default function CreateCategoryModal(
    {categoryModalOpen}: {categoryModalOpen: ModalHandlerType}
    ){

        const categoryIconRef = useRef<HTMLInputElement>(null);
        const [categoryIconUploaded, setCategoryIconUploaded] = useState<boolean>(false)

        const openFileForCategoryIcon = () => {
            categoryIconRef.current?.click();
        }

        const handleCategoryIconFileState = () => {
            categoryIconRef.current?.files?.[0] ? setCategoryIconUploaded(true) : setCategoryIconUploaded(false)
        }

    return (
        <BaseModal modalOpen={categoryModalOpen}>
            <div className="flex flex-col gap-6 w-[90%] pt-4">
                <p className="text-center">Create a category for one of your finance streams</p>
                <div>
                    <form action="" className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="category-name" className="">Name:</label>
                            <input type="text" id="category-name" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="category-type" className="">Type:</label>
                            <input type="text" id="category-type" className="border-1 border-gray-200 bg-gray-50 h-10 w-full px-2 rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="category-icon">Category Icon</label>
                            <button type="button" onClick={openFileForCategoryIcon} className="flex justify-center items-center w-full h-14">
                                { categoryIconRef.current?.files?.[0] ? <FileCheckIcon className="h-full w-10" /> 
                                : <FileQuestionMarkIcon className="h-full w-10" /> }
                            </button>
                            <input onChange={handleCategoryIconFileState} ref={categoryIconRef} type="file" name="category-icon" id="category-icon" className="" />
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