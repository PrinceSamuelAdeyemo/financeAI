import Bottombar from "./Bottombar"
import ProfileIndicator from "./ProfileIndicator"
import { Bell, MenuIcon } from "lucide-react"

export default function DashboardSidebar(){
    return (
        <div className="flex flex-row justify-between bg-pnk-200 lg:flex-col">
            <div className="flex items-center gap-4 lg:gap-0 lg:items-start">
                <MenuIcon className="lg:hidden" />
                <p className="lg:block">Finance AI</p>
            </div>
            <div className="hidden lg:flex">
                <Bottombar />
            </div>
            <div className="flex">
                <Bell />
                <ProfileIndicator />
            </div>
        </div>
    )
}