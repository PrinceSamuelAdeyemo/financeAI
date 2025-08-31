import Link from "next/link"
import { PiggyBank, Wallet, LayoutDashboard, BotIcon, SparklesIcon } from "lucide-react"

export default function Bottombar(){
    return (
        <div className="px-4 py-2 w-full flex justify-between border-t-1 border-gray-300 shadow lg:p-0 lg:flex-col lg:gap-10 lg:justify-start lg:border-none lg:shadow-none">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:w-full lg:gap-4 lg:px-4 lg:justify-start">
                <LayoutDashboard className="w-4 h-4 lg:w-6 lg:h-6" />
                <Link href={'/dashboard/home'} className="text-sm lg:text-base">Home</Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:w-full lg:gap-4 lg:px-4 lg:justify-start">
                <Wallet className="w-4 h-4 lg:w-6 lg:h-6" />
                <Link href={'/dashboard/transactions'} className="text-sm lg:text-base">Transactions</Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:w-full lg:gap-4 lg:px-4 lg:justify-start">
                <PiggyBank className="w-4 h-4 lg:w-6 lg:h-6" />
                <Link href={'/dashboard/budgets'} className="text-sm lg:text-base">Budget</Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:w-full lg:gap-4 lg:px-4 lg:justify-start">
                <SparklesIcon className="w-4 h-4 lg:w-6 lg:h-6" />
                <Link href={'/dashboard/goals'} className="text-sm lg:text-base">Goals</Link>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:w-full lg:gap-4 lg:px-4 lg:justify-start">
                <BotIcon className="w-4 h-4 lg:w-6 lg:h-6" />
                <Link href={'/dashboard/tran'} className="text-sm lg:text-base">Assistant</Link>
            </div>
        </div>
    )
}