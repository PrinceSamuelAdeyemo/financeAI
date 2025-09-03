
import { X } from "lucide-react"

import { ModalHandlerType } from "@/Types/allTypes"

export default function BaseModal({children, modalOpen}: {children?: React.ReactNode} & {modalOpen?: ModalHandlerType}){
    return (
        /* Modal background layer */
        <div className="flex justify-center items-center w-full h-[93vh] top-0 left-0 absolute z-10">
            {/* Main modal parent */}
            <div className="relative bg-white border-1 border-gray-400 shadow-xl h-[80%] w-[90%] lg:w-[80%]">
                <button onClick={() => modalOpen?.(false)} className="absolute top-2 right-2">
                    <X className="text-red-500" />
                </button>
                <div className="flex justify-center absolute bottom-0 w-full h-[95%] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}