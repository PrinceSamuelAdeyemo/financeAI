import DashboardNavbar from "@/components/Sidebar"


export default function PageContainer({children}: {children: React.ReactNode}){
    return (
        <div className="h-[90vh] relative lg:absolute bottom-0">
            {/* <DashboardNavbar /> */}
            <div className="h-full overflow-y-scroll sm:px-2 px-4 py-[4vh] lg:h-[90vh]">
                {children}
            </div>
        </div>
    )
}