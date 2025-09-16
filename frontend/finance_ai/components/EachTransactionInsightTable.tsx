import api from "@/utils/api";
import dynamic from "next/dynamic"

import { TransactionType } from "@/Types/allTypes";

const Lazy_EachTransactionInsightTableEntry = dynamic(() => import('@/components/EachTransactionInsightTableEntry'));

const getListOfTransactions = async() => {
    try{
        const response = await api.get("api/finance/accounts")
        console.log(response)
        return response.data
    }catch(error){
        console.error(error)
    }
}

export default async function EachTransactionInsightTable(){
    const transactionList: TransactionType[] = await getListOfTransactions();
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
                {
                    transactionList.map((transaction, index) => (
                        <Lazy_EachTransactionInsightTableEntry />
                    ))
                }
            </tbody>
        </table>
    )
}