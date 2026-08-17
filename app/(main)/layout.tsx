import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Loader2 } from "lucide-react";
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
            <Suspense fallback={<Loader />}>
                <UserContextDataFetcher>
                    <AppSidebar />
                    <div className="p-5 w-full">
                        <SidebarTrigger />
                        <div className="p-2 pt-5">{children}</div>
                    </div>
                </UserContextDataFetcher>
            </Suspense>
        </SidebarProvider>
    );
}

async function UserContextDataFetcher(props: { children: React.ReactNode }) {
    const user = await getUser();

    if (user === null) {
        redirect("/login");
    }

    return (
        <UserContextProvider user={user}>{props.children}</UserContextProvider>
    );
}

function Loader() {
    return (
        <div className="flex gap-2 items-center justify-center w-full text-2xl">
            {/* <div> */}
            <Loader2 className="animate-spin text-blue-600" size={35} />{" "}
            Loading...
            {/* </div> */}
        </div>
    );
}
