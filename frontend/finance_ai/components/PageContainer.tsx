import DashboardNavbar from "@/components/Sidebar"


export default function PageContainer({children}: {children: React.ReactNode}){
    return (
        <div className="w-full h-[90vh] relative lg:absolute bottom-0">
            {/* <DashboardNavbar /> */}
            <div className="h-full overflow-scroll py-[4vh] lg:h-[90vh]">
                {children}
            </div>
            <div className="absolute bottom-0 right-5 bg-black h-10 w-10 rounded-full lg:hidden">
                
            </div>
        </div>
    )
}