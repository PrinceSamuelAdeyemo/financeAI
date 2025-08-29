import Image from "next/image"

export default function Bottombar(){
    return (
        <div className="px-4 w-full flex justify-between border-t-1 border-gray-300 shadow lg:px-0 lg:flex-col lg:gap-10 lg:justify-start lg:border-none lg:shadow-none">
            <div className="flex flex-col lg:flex-row lg:w-full">
                <Image src="" alt="hh" />
                <p>Home</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-full">
                <Image src="" alt="hh" />
                <p>Transactions</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-full">
                <Image src="" alt="hh" />
                <p>Budget</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-full">
                <Image src="" alt="hh" />
                <p>Goals</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-full">
                <Image src="" alt="hh" />
                <p>Assistant</p>
            </div>
        </div>
    )
}