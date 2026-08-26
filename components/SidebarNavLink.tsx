"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenuButton } from "@/components/ui/sidebar";

type SidebarNavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export function SidebarNavLink({ href, children }: SidebarNavLinkProps) {
    const pathname = usePathname();

    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <SidebarMenuButton
            asChild
            isActive={isActive}
            className="data-[active=true]:bg-blue-100 data-[active=true]:text-blue-500"
        >
            <Link prefetch={true} href={href}>
                {children}
            </Link>
        </SidebarMenuButton>
    );
}
