import { Edit, Delete, Trash2 } from "lucide-react";

export default function EachTransactionInsightCard(){
    return (
        <div className="border-1 border-gray-400 rounded-xl p-4">
            <div className="flex justify-between border-b-1 pb-3 border-gray-400">
                <div className="flex flex-col gap-2">
                    <p className="text-sm">Shoprite</p>
                    <p className="text-xs text-gray-400">Weekly groceries</p>
                    <div className="flex">
                        <p className="flex justify-center items-center text-xs px-2 rounded-xl bg-blue-100 text-blue-900">Groceries</p>
                        <p className="flex justify-center items-center text-xs px-2">Bank 1</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-end">- #15,200</p>
                    <p className="text-xs text-gray-400 text-end">28 Aug</p>
                </div>
            </div>
            <div className="flex pt-3 gap-2">
                <Edit className="w-4 h-4" />
                <Trash2 className="w-4 h-4 text-red-500" />
                <p className="text-xs border-1 border-gray-400 rounded-xl px-1">Essential</p>
                <p className="text-xs border-1 border-gray-400 rounded-xl px-1">Subscription</p>
            </div>
        </div>
    )
}