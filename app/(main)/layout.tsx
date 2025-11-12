import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Suspense } from "react";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <Suspense fallback={<div>Loading sidebar...</div>}>
                <AppSidebar />
            </Suspense>
            <main className="p-5 w-full">
                <SidebarTrigger />
                <div className="p-2 pt-5">{children}</div>
            </main>
        </SidebarProvider>
    );
}
