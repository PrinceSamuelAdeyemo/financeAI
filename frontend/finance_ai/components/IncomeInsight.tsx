import Image from "next/image"

import { InsightDataType } from "@/Types/allTypes"

export default function IncomeInsight(prop : InsightDataType){
    return (
        <div className="border-2 border-gray-300 rounded-xl p-4">
            <div className="flex flex-col">
                <p>{prop.title}</p>
                <p className="font-bold text-2xl">{prop.data}</p>
                <p className="text-sm"><span></span>{prop.remark}</p>
            </div>
            <Image src={""} alt="" />
        </div>
    )
}