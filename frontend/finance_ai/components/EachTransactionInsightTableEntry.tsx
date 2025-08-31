import { Edit, Trash2 } from "lucide-react";

export default function EachTransactionInsightTableEntry(){
    return (
        <tr className="border-b-1 border-gray-200 h-16">
            <td className="text-start">28 Aug</td>
            <td className="text-start">Shoprite</td>
            <td className="text-start"><p className="text-star text-xs px-2 rounded-xl w-fit bg-blue-100 text-blue-900">Groceries</p></td>
            <td className="text-start">Bank 1</td>
            <td className="text-start font-semibold">#15,200</td>
            <td className="flex flex-col pt-2">
                <p className="text-sm">Weekly groceries</p>
                <p>
                    <span className="text-xs border-1 border-gray-400 rounded-xl px-1 w-fit">essential</span>
                </p>
                
            </td>
            <td><div className="flex gap-4">
                    <Edit className="w-4 h-4" />
                    <Trash2 className="w-4 h-4 text-red-500" />
                </div>
            </td>
        </tr>
    )
}