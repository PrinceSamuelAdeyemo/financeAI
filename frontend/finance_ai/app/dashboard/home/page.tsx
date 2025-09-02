import PageContainer from "@/components/PageContainer";
import IncomeInsight from "@/components/IncomeInsight";
import GraphComponent from "@/components/GraphComponent";
import IncomeVSExpenses from "@/components/IncomeVSExpenses";
import CategorySpendingPieChart from "@/components/CategorySpendingPieChart";
import BalanceForecastChart from "@/components/BalanceForecastChart";
import AI_Insight from "@/components/AI_Insight";
import UpcomingBillComponent from "@/components/UpcomingBillComponent";
import QuickActionButtonDashboard from "@/components/QuickActionButtonDashboard";
import Transaction_Receipt_Buttons from "@/components/Transaction_Receipt_Buttons";

import { MenuIcon } from "lucide-react";

import { InsightDataType, } from "@/Types/allTypes";


export default function Dashboard(){

    const InsightData: InsightDataType[] = [
        {
            title: 'Income',
            data: '#870,000',
            remark: '12%',
            icon: '',
        },
        {
            title: 'Expenses',
            data: '#428,600',
            remark: '3%',
            icon: '',
        },
        {
            title: 'Net Balance',
            data: '#441,400',
            remark: '15%',
            icon: '',
        },
        {
            title: 'Savings Rate',
            data: '51%',
            remark: 'Excellence',
            icon: '',
        },
    ]

    const openCreateCategoryModal = () => {
        alert("Hello")
    }


    return (
        <PageContainer>
            <div className="flex justify-center items-center absolute -top-10 left-2 lg:hidden">
                <MenuIcon />
            </div>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {
                    InsightData.map((insight_data, index) => (
                        <IncomeInsight key={index} {...insight_data} />
                    ))
                }
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <GraphComponent title="Cash Flow" message="Income vs Expenses this month">
                    <IncomeVSExpenses />
                </GraphComponent>

                <GraphComponent title="Spending by Category" message="Top 5 categories this month">
                    <CategorySpendingPieChart />
                </GraphComponent>
            </div>

            <div>
                <GraphComponent title="Balance Forecast" message="Projected balance based on current spending patterns">
                    <BalanceForecastChart />
                </GraphComponent>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <GraphComponent title="AI Insights" message="Personalized recommendations">
                        <AI_Insight />
                    </GraphComponent>
                </div>
                <div className="flex flex-col gap-4">
                    <GraphComponent title="Upcoming Bills" message="Next 7 days">
                        <UpcomingBillComponent />
                    </GraphComponent>
                    <GraphComponent title="Quick actions"  message="">
                        <QuickActionButtonDashboard openModal={openCreateCategoryModal} />
                    </GraphComponent>

                </div>
            </div>

            <div className="flex justify-center items-center absolute bottom-10 right-5 h-10 w-10 bg-black rounded-full lg:hidden">
                <p className="text-white">+</p>
            </div>
                
        </PageContainer>
    )
}