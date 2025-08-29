import SettingsIndicator from "./ui/SettingsIndicator"


export default function ProfileIndicator() {
    return (
        <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-gray-300 rounded-full h-6 w-6 lg:h-10 lg:w-10">
                <p>JD</p>
            </div>
            <div className="hidden lg:block">
                <p>John Doe</p>
                <p>john@example.com</p>
            </div>
            <div className="hidden lg:flex">
                <SettingsIndicator />
            </div>
            
        </div>
    )
}