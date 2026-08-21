import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "@/types";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getUser, isMembershipExpired } from "../lib/dal";
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

    const expired_mem = await isMembershipExpired(user);

    return (
        <>
            {expired_mem && (
                <ExpiredMembershipPrompt userprofile={user.userprofile} />
            )}
            <UserContextProvider user={user}>
                {props.children}
            </UserContextProvider>
        </>
    );
}

async function ExpiredMembershipPrompt(props: {
    userprofile: UserProfile | undefined;
}) {
    return (
        <Card className="absolute fixed right-10 bottom-10 z-[1000] shadow-2xl border-2 border-amber-500 bg-amber-50 rounded-xl">
            <CardHeader>
                <CardTitle>Membership Expired</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    Your membership has expired. Please renew your membership
                </div>
                <div className="font-bold">
                    Expiration Date:{" "}
                    {Intl.DateTimeFormat(undefined, {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }).format(props.userprofile?.membershipValidity)}
                </div>
                <div>
                    Please renew your membership at your earliest convenience.
                </div>
            </CardContent>
        </Card>
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
