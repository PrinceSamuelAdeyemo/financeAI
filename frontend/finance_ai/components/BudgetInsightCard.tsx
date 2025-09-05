import Progressbar from "./ui/Progressbar"

export default function BudgetInsightCard(){
    return (
        <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-xl p-2 lg:p-4">
            <p className="text-sm font-semibold">Groceries</p>
            <p className="text-sm text-gray-500">#35,200 of #60,000</p>
            <Progressbar position={80} color="purple" />
            <div className="flex justify-between text-xs text-gray-400">
                <p>80%</p>
                <p>20% left</p>
            </div>
        </div>
    )
}