import DashboardNavbar from "@/components/Sidebar"


export default function PageContainer({children}: {children: React.ReactNode}){
    return (
        <div className="h-[90vh] relative w-full">
            {/* <DashboardNavbar /> */}
            <div className="flex flex-col gap-5 h-full overflow-y-scroll sm:px-2 px-4 pt-[4vh] pb-[6vh] lg:h-[90vh]">
                {children}
            </div>
        </div>
    )
}