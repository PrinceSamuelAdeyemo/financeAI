export default function GoalInsightCard(){
    return (
        <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-xl p-2 lg:p-4">
            <div className="flex justify-between">
                <p className="text-sm font-semibold">Groceries</p>
                <p className="text-xs border-1 border-gray-400 px-1 rounded-xl font-semibold">31 Aug 2025</p>
            </div>
            <p className="text-sm text-gray-500">#35,200 of #60,000</p>
            <p>Progress bar</p>

            <table>
                <thead>
                    <th className="text-start text-gray-400 font-normal">Progress</th>
                    <th className="text-start text-gray-400 font-normal">Remaining</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-start text-sm">35%</td>
                        <td className="text-start text-sm">#35,000</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-sm w-full rounded-lg bg-blue-100 p-1"><span className="font-semibold">Monthly plan: </span>#75,000 (11 months to go)</p>
            <div className="flex gap-3">
                <button className="w-[65%] text-white bg-purple-800 rounded-lg">Add Contribution</button>
                <button className="w-[35%] border-1 border-gray-500 rounded-lg">Adjust goal</button>
            </div>
        </div>
    )
}