import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="p-5 w-full">
                <SidebarTrigger />
                <div className="p-2">{children}</div>
            </main>
        </SidebarProvider>
    );
}
