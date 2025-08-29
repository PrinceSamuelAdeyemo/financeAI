import PageContainer from "@/components/PageContainer";
import IncomeInsight from "@/components/IncomeInsight";

import { InsightDataType } from "@/Types/allTypes";

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

    return (
        <PageContainer>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    InsightData.map((insight_data, index) => (
                        <IncomeInsight key={index} {...insight_data} />
                    ))
                }
            </div>

            <div className="flex justify-center items-center absolute bottom-10 right-5 bg-purple-800 h-10 w-10 rounded-full lg:hidden">
                <p className="text-white">+</p>
            </div>
                
        </PageContainer>
    )
}