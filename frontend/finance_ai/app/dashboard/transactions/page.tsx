import dynamic from "next/dynamic";

import PageContainer from "@/components/PageContainer";
const Lazy_EachTransactionInsightCard = dynamic(() => import('@/components/EachTransactionInsightCard'));
import { Edit, Trash2 } from "lucide-react";


export default function Transactions(){

    return (
        <PageContainer>

            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div>
                    <p className="font-semibold">Transactions</p>
                    <p className="text-gray-400">Track your income and expenses</p>
                </div>
                <button className="bg-purple-600 text-white w-full h-10 rounded-xl lg:px-4 py-2 lg:w-fit">
                    + Add Transaction
                </button>
            </div>

            <div className="flex flex-col gap-4 border-2 border-gray-400 rounded-xl p-2 lg:flex-row">
                <input className="w-full rounded bg-gray-100 h-8 lg:w-1/2" type="search" name="" id="" placeholder="Search transactions" />
                <div className="flex flex-col gap-4 lg:w-1/2 lg:flex-row">
                    <div className="flex justify-between p-1 w-full rounded-2xl bg-gray-100">
                        <button className="w-1/3 rounded-2xl bg-white">All</button>
                        <button>Income</button>
                        <button>Expense</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <select name="category" id="category" className="flex border-2 py-1 rounded-lg border-gray-200">
                            <option value="">Category A</option>
                            <option value="">Category B</option>
                            <option value="">Category C</option>
                            <option value="">Category D</option>
                            <option value="">Category E</option>
                        </select>
                        <select name="account" id="account" className="flex border-2 py-1 rounded-lg border-gray-200">
                            <option value="">Amount</option>
                            <option value="">Category B</option>
                            <option value="">Category C</option>
                            <option value="">Category D</option>
                            <option value="">Category E</option>
                        </select>
                        <select name="date" id="date" className="flex border-2 py-1 rounded-lg border-gray-200">
                            <option value="">Date</option>
                            <option value="">Category B</option>
                            <option value="">Category C</option>
                            <option value="">Category D</option>
                            <option value="">Category E</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="border-1 p-4 border-gray-300 rounded-2xl">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div>
                            <p>Recent Transactions</p>
                            <p className="text-sm text-gray-500">6 transactions found</p>
                        </div>
                        <button className="border-1 border-gray-200 px-2 rounded">Sort</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="lg:hidden">
                            <Lazy_EachTransactionInsightCard />
                        </div>

                        <div className="hidden lg:block">
                            <table className="w-full">
                                <thead>
                                    <th className="text-start">Date</th>
                                    <th className="text-start">Merchant</th>
                                    <th className="text-start">Category</th>
                                    <th className="text-start">Account</th>
                                    <th className="text-start">Amount</th>
                                    <th className="text-start">Notes</th>
                                    <th className="text-start">Actions</th>
                                </thead>
                                <tbody>
                                    <td className="text-start">28 Aug</td>
                                    <td className="text-start">Shoprite</td>
                                    <td className="text-start flex justify-center items-center text-xs px-2 rounded-xl bg-blue-100 text-blue-900">Groceries</td>
                                    <td className="text-start">Bank 1</td>
                                    <td className="text-start font-semibold">#15,200</td>
                                    <td className="flex flex-col">
                                        <span>Weekly groceries</span>
                                        <span className="text-xs border-1 border-gray-400 rounded-xl px-1 w-fit">essential</span>
                                    </td>
                                    <td><div className="flex gap-4">
                                            <Edit className="w-4 h-4" />
                                            <Trash2 className="w-4 h-4 text-red-500" />
                                        </div>
                                    </td>
                                </tbody>
                        </table>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
             
        </PageContainer>
    )
}