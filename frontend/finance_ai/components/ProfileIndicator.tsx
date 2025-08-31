import { Settings } from "lucide-react"


export default function ProfileIndicator() {
    return (
        <div className="flex items-center gap-2 lg:justify-between lg:px-4 lg:w-full">
            <div className="lg:flex lg:gap-2">
                <div className="flex justify-center items-center bg-gray-300 rounded-full h-6 w-6 lg:h-10 lg:w-10">
                    <p>JD</p>
                </div>
                <div className="hidden lg:block">
                    <p className="text-sm">John Doe</p>
                    <p className="text-sm">john@example.com</p>
                </div>
            </div>
            
            <div className="hidden lg:flex">
                <Settings className="w-5 h-5" />
            </div>
            
        </div>
    )
}