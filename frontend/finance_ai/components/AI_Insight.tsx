import Image from "next/image"

export default function AI_Insight(){
    return (
        <div className="flex flex-col gap-4 px-4 pb-11">

            <div className="flex gap-2 p-2 rounded-xl bg-amber-100">
                <Image src={""} alt="ico"/>
                <div>
                    <p>Transport spending</p>
                    <p className="text-gray-500">You spent 2x more on Transport vs last month. Consider using public transport.</p>
                    <button className="bg-white px-2 py-1">View Details</button>
                </div>
            </div>
            <div className="flex gap-2 p-2 rounded-xl bg-blue-100">
                <Image src={""} alt="ico"/>
                <div>
                    <p>Transport spending</p>
                    <p className="text-gray-500">You spent 2x more on Transport vs last month. Consider using public transport.</p>
                    <button className="bg-white px-2 py-1">View Details</button>
                </div>
            </div>
            <div className="flex gap-2 p-2 rounded-xl bg-green-100">
                <Image src={""} alt="ico"/>
                <div>
                    <p>Transport spending</p>
                    <p className="text-gray-500">You spent 2x more on Transport vs last month. Consider using public transport.</p>
                    <button className="bg-white px-2 py-1">View Details</button>
                </div>
            </div>

        </div>
    )
}