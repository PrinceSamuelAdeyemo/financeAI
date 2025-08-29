import Image from "next/image"

export default function Bottombar(){
    return (
        <div className="px-4 w-full flex lg:flex-col justify-between lg:justify-start">
            <div className="flex flex-col">
                <Image src="" alt="hh" />
                <p>Home</p>
            </div>
            <div className="flex flex-col">
                <Image src="" alt="hh" />
                <p>Transactions</p>
            </div>
            <div className="flex flex-col">
                <Image src="" alt="hh" />
                <p>Budget</p>
            </div>
            <div className="flex flex-col">
                <Image src="" alt="hh" />
                <p>Goals</p>
            </div>
            <div className="flex flex-col">
                <Image src="" alt="hh" />
                <p>Assistant</p>
            </div>
        </div>
    )
}