import Image from "next/image"
import { EachAI_InsightType } from "@/Types/allTypes"

export default function EachAI_Insight(props: EachAI_InsightType){
    return (
        <div style={{backgroundColor: props.bgColor}} className="flex gap-2 p-2 rounded-xl">
            <Image src={props?.icon ? props.icon : ''} alt="ico"/>
            <div className="flex flex-col gap-2">
                <p>{props.title}</p>
                <p className="text-gray-500 text-sm lg:text-base">{props.message}</p>
                <button className="bg-white px-2 text-sm w-fit rounded lg:py-1">View Details</button>
            </div>
        </div>
    )
}