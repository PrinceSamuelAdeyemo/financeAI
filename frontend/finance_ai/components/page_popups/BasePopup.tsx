import { ModalHandlerType } from "@/Types/allTypes"

export default function BasePopup({children, makePagePopupOpen}: {children?: React.ReactNode} & {makePagePopupOpen?: ModalHandlerType}){

    return (
        <div className="absolute w-full h-[60vh] -bottom-5 left-0 bg-gray-800 shadow-xl border-2 z-10">
            {children}
        </div>
    )
}