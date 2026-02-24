import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getUser } from "../lib/dal";
import UserContextProvider from "./UserContextProvider";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <Suspense fallback={<div>Loading sidebar...</div>}>
                <UserContextDataFetcher>
                    <AppSidebar />
                    <main className="p-5 w-full">
                        <SidebarTrigger />
                        <div className="p-2 pt-5">{children}</div>
                    </main>
                </UserContextDataFetcher>
            </Suspense>
        </SidebarProvider>
    );
}

async function UserContextDataFetcher(props: { children: React.ReactNode }) {
    const auth = await getUser();

    if (auth === null) {
        redirect("/login");
    }

    return (
        <UserContextProvider user={auth}>{props.children}</UserContextProvider>
    );
}
