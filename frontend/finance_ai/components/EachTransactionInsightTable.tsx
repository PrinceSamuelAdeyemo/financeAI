import dynamic from "next/dynamic"

const Lazy_EachTransactionInsightTableEntry = dynamic(() => import('@/components/EachTransactionInsightTableEntry'));

export default function EachTransactionInsightTable(){
    return (
        <table className="w-full border-spacing-y-4">
            <thead>
                <th className="text-start">Date</th>
                <th className="text-start">Merchant</th>
                <th className="text-start">Category</th>
                <th className="text-start">Account</th>
                <th className="text-start">Amount</th>
                <th className="text-start">Notes</th>
                <th className="text-start">Actions</th>
            </thead>
            <tbody className="">
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
                <Lazy_EachTransactionInsightTableEntry />
            </tbody>
        </table>
    )
}