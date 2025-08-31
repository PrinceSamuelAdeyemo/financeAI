import dynamic from "next/dynamic";
import { PiggyBank } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const Lazy_GoalInsightCard = dynamic(() => import('@/components/GoalInsightCard'));

export default function Goals(){

    return (
        <PageContainer>

            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div>
                    <p className="font-semibold">Goals</p>
                    <p className="text-gray-400">Track your financial objectives</p>
                </div>
                <button className="bg-purple-600 text-white w-full h-10 rounded-xl lg:px-4 py-2 lg:w-fit">
                    + Create Goal
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Lazy_GoalInsightCard />
                <Lazy_GoalInsightCard />
            </div>

            <div className="flex justify-center items-center absolute bottom-10 right-5 h-10 w-10 bg-black rounded-full lg:hidden">
                <p className="text-white">+</p>
            </div>
             
        </PageContainer>
    )
}