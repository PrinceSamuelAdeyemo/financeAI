import Image from "next/image"

export default function UpcomingBillComponent(){
    return (
        <div className="flex flex-col gap-4">

            <div className="flex gap-2 p-2 rounded-xl bg-red-100">
                <Image src={""} alt="ico"/>
                <div>
                    <p>Netflix</p>
                    <p className="text-gray-500">Due in 3 days</p>
                </div>
            </div>
            <div className="flex gap-2 p-2 rounded-xl bg-blue-100">
                <Image src={""} alt="ico"/>
                <div>
                    <p>Gym membership</p>
                    <p className="text-gray-500">Due in 6 days</p>
                </div>
            </div>

        </div>
    )
}