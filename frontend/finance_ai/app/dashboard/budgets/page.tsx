import dynamic from "next/dynamic";
import { PiggyBank } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const Lazy_BudgetInsightCard = dynamic(() => import('@/components/BudgetInsightCard'));

export default function Budgets(){

    return (
        <PageContainer>

            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div>
                    <p className="font-semibold">Budgets</p>
                    <p className="text-gray-400">Track your spending limits</p>
                </div>
                <button className="bg-purple-600 text-white w-full h-10 rounded-xl lg:px-4 py-2 lg:w-fit">
                    + Create Budget
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Lazy_BudgetInsightCard />
                <Lazy_BudgetInsightCard />
                <Lazy_BudgetInsightCard />
                <Lazy_BudgetInsightCard />
                <Lazy_BudgetInsightCard />
                <Lazy_BudgetInsightCard />
                <Lazy_BudgetInsightCard />

                <div className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-300 rounded-xl px-2 py-6 lg:px-4">
                    <PiggyBank />
                    <p className="text-sm font-semibold">Create New Budget</p>
                    <p className="text-sm text-gray-500">Set spending limits for your categories</p>
                    <button className="border-1 border-gray-400 px-2 py-1 rounded-lg text-sm lg:text-base">+ Add Budget</button>
                </div>
            </div>

            <div className="flex justify-center items-center absolute bottom-10 right-5 h-10 w-10 bg-black rounded-full lg:hidden">
                <p className="text-white">+</p>
            </div>
             
        </PageContainer>
    )
}