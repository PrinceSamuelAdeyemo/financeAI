import DashboardSidebar from "@/components/Sidebar";
import DesktopNavbar from "@/components/DesktopNavbar";
import Bottombar from "@/components/Bottombar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-[100vh] overflow-y-hidden lg:flex-row">
            <div className="w-full lg:w-[20%] xl:[15%]">
              <DashboardSidebar />
            </div>
            
            <div className="lg:w-[80%] xl:w-[85%]">
              <div className="hidden lg:block lg:w-fulll">
                  <DesktopNavbar />
                </div>
              {children}
            </div>

            <div className="absolute bottom-0 left-0 w-full lg:static lg:hidden">
              <Bottombar />
            </div>
            
        </div>
    )
}