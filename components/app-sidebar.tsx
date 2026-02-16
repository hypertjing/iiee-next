import { ChevronUp, Home, LogOut, User2, Users } from "lucide-react";

import { logout } from "@/app/actions/auth";
import { getUser } from "@/app/lib/dal";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { getInitials } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Menu items.
const items = [
    {
        title: "COGS Request",
        url: "/cogs",
        icon: Home,
    },
    // {
    //     title: "Chapter Share",
    //     url: "/chapter_share",
    //     icon: Share2,
    // },
    {
        title: "Members",
        url: "/members",
        icon: Users,
    },
];

export async function AppSidebar() {
    const auth = await getUser();

    if (!auth) {
        redirect("/login");
    }

    const { userprofile, account } = auth;

    const date_now = new Date(Date.now());
    // const exp_test = new Date(Date.now());
    // exp_test.setFullYear(2024);

    if (date_now > userprofile.membershipValidity) {
        redirect("/membership_expired");
        console.log(userprofile.membershipValidity, date_now);
    }

    // const notification_count = await db_new.$count(
    //     cogsrequest,
    //     eq(cogsrequest.viewed, false)
    // );

    const user_position: string = "P1";
    // const user_position = user.poistion?.code;

    const notification_count = await db_new.transaction(async (tx) => {
        let cogs_requests_temp;
        if (user_position == "P1") {
            cogs_requests_temp = await tx.$count(
                cogsrequest,
                eq(cogsrequest.viewed, false),
            );
        } else {
            cogs_requests_temp = await tx.$count(
                cogsrequest,
                and(
                    eq(cogsrequest.response_viewed, false),
                    eq(cogsrequest.user_id, auth.account.pkUserAccountsId),
                ),
            );
        }

        return cogs_requests_temp;
    });

    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                            {item.url == "/cogs" &&
                                                notification_count > 0 && (
                                                    <Badge
                                                        variant={"destructive"}
                                                    >
                                                        {notification_count}
                                                    </Badge>
                                                )}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex flex-col px-2">
                            <div className="text-xs">Membership Validity</div>
                            {userprofile.memberType === "Life" ? (
                                userprofile.memberType
                            ) : (
                                <>
                                    {Intl.DateTimeFormat(undefined, {
                                        month: "long",
                                        day: "2-digit",
                                        year: "numeric",
                                    }).format(userprofile.membershipValidity)}
                                </>
                            )}
                        </div>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size={"lg"}
                                    className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group"
                                >
                                    <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>
                                            {getInitials(
                                                `${account.fname} ${account.lname}`,
                                            )}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <div className="truncate font-medium">
                                            {account.fname} {account.lname}
                                        </div>
                                        <div className="text-muted-foreground truncate text-xs">
                                            {account.email}
                                        </div>
                                    </div>
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                align="end"
                                className="w-[200px]"
                            >
                                <DropdownMenuItem>
                                    <User2 /> Account
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logout}>
                                    <LogOut /> Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
