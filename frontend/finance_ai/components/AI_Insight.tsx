import Image from "next/image"
import EachAI_Insight from "./EachAI_Insight";
import { EachAI_InsightType } from "@/Types/allTypes";

export default function AI_Insight(){

    const eachAIInsightArray: EachAI_InsightType[] = [
        {
            bgColor: '#ADDFFF',
            icon: '',
            title: 'Transport spending',
            message: 'You spent 2x more on Transport vs last month. Consider using public transport.'
        },
        {
            bgColor: '#ADDFFF',
            icon: '',
            title: 'Transport spending',
            message: 'You spent 2x more on Transport vs last month. Consider using public transport.'
        },
    ]
    return (
        <div className="flex flex-col gap-4 px-4 lg:pb-11">
            {
                eachAIInsightArray.map((eachAIInsight, index) => (
                    <EachAI_Insight {...eachAIInsight} />
                ))
            }

        </div>
    )
}