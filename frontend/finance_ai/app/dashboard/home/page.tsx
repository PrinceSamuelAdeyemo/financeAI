import api from "@/utils/api";

import PageContainer from "@/components/PageContainer";
import IncomeInsight from "@/components/IncomeInsight";
import GraphComponent from "@/components/GraphComponent";
import IncomeVSExpenses from "@/components/IncomeVSExpenses";
import CategorySpendingPieChart from "@/components/CategorySpendingPieChart";
import BalanceForecastChart from "@/components/BalanceForecastChart";
import AI_Insight from "@/components/AI_Insight";
import UpcomingBillComponent from "@/components/UpcomingBillComponent";
import QuickActionButtonDashboard from "@/components/QuickActionButtonDashboard";
import SidebarMobile from "@/components/ui/SidebarMobile";
import HomepagePopup from "@/components/page_popups/HomepagePopup";

import { MenuIcon, X } from "lucide-react";

import { InsightDataType, } from "@/Types/allTypes";

const getDashboardOverviewData = async() => {
    try{
        const response = await api.get("api/finance/account_overview")
        console.log(response.data)
        return response.data["message"]
    }
    catch (error){
        console.error(error)
    }
}


export default async function Dashboard(){

    /* const InsightData: InsightDataType[] = [
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
    ] */

    const getDashboardData: InsightDataType[] = await getDashboardOverviewData()
    return (
        <PageContainer>
            <SidebarMobile />

            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {
                    getDashboardData.map((insight_data, index) => (
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
                        <QuickActionButtonDashboard />
                    </GraphComponent>

                </div>
            </div>       

            <HomepagePopup />
                
        </PageContainer>
    )
}