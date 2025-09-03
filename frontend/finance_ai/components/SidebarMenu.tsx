
import { X } from "lucide-react"
import { ModalHandlerType } from "@/Types/allTypes"

export default function SidebarMenu({openSidebar, sidebarVisible}: {openSidebar:boolean, sidebarVisible: ModalHandlerType}){
    return (
        <div className={`absolute h-[100vh] -top-14 left-0 w-full bg-purple-200 z-10 transition-transform duration-300 ease-in-out transform ${openSidebar ? 'translate-x-0': '-translate-x-full'} lg:hidden`}>
            <div className="flex justify-between pt-2 px-2">
                <p className='text-2xl font-bold text-purple-900'>FinanceAI</p>
                <button onClick={() => sidebarVisible?.(false)} className="">
                    <X className="w-7 h-7" />
                </button>
            </div>
        </div>
    )
}