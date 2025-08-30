'use client';

import { IncomeVSExpensesType } from "@/Types/allTypes";

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid } from "recharts";


export default function IncomeVSExpenses(){
    const IncomeVSExpensesData: IncomeVSExpensesType[] = [
            {
                week: '1',
                income: 20000,
                expenses: 15000,
            },
            {
                week: '2',
                income: 20000,
                expenses: 5000,
            },
            {
                week: '3',
                income: 20000,
                expenses: 17000,
            },
            {
                week: '4',
                income: 100000,
                expenses: 75000,
            },
    ]


    return (
        <div className="w-full h-[30vh] lg:h-[50vh]">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart
                    width={500} height={500} data={IncomeVSExpensesData} margin={{}}
                >
                    <CartesianGrid strokeDasharray={'3 3'} />
                    <XAxis dataKey={`week`} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={'income'} fill="#3E8E41" />
                    <Bar dataKey={'expenses'} fill="#FF0000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}