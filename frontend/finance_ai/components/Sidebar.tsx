import Bottombar from "./Bottombar"
import ProfileIndicator from "./ProfileIndicator"
import { Bell, MenuIcon } from "lucide-react"

export default function DashboardSidebar(){
    return (
        <div className="flex flex-row items-center justify-between h-full px-2 border-b-1 shadow lg:px-0 lg:items-start lg:relative lg:border-none lg:shadow-none lg:flex-col">
            <div className="flex items-center gap-4 h-[7vh] w-full lg:gap-0 lg:justify-center lg:border-b-0 lg:border-gray-300 lg:shadow-sm">
                <MenuIcon className="lg:hidden" />
                <p className="font-bold text-purple-800 lg:text-xl lg:block">Finance AI</p>
            </div>
            <div className="hidden lg:flex pt-4 h-full">
                <Bottombar />
            </div>
            <div className="flex gap-2 lg:absolute lg:bottom-8 lg:w-full">
                <Bell className="lg:hidden" />
                <ProfileIndicator />
            </div>
        </div>
    )
}