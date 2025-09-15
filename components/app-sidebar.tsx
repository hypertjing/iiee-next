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
import { getInitials } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
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
                                                `${account.fname} ${account.lname}`
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
