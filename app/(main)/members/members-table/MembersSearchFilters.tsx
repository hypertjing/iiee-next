"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MemberChapters, MemberRegions } from "@/types";
import { Loader2, RotateCcw, RotateCw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { LicenseType, MemberStatusType, reloadMembersTable } from "../actions";
import MembersTablePagination from "./MembersTablePagination";

export default function MembersSearchFilters(props: {
    regions_list: MemberRegions[];
    member_chapters_select: MemberChapters[];
    total_members: number;
    children: React.ReactNode;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [keyword, setKeyword] = useState("");
    const [region, setRegion] = useState("all");
    const [chapter, setChapter] = useState("all");
    const [member_status, setMemberStatus] = useState("all");
    const [member_type, setMemberType] = useState("all");
    const [license_type, setLicenseType] = useState("all");
    const [limit, setLimit] = useState(5);
    const [offset, setOffset] = useState(0);

    const [pending, startTransition] = useTransition();
    const [reload_pending, setReloadPending] = useState(false);

    const handleReload = async () => {
        if (reload_pending) return;

        setReloadPending(true);

        try {
            await reloadMembersTable();
        } finally {
            setReloadPending(false);
        }
    };

    /**
     * Update a filter in the URL.
     * Any filter change resets pagination to page 1.
     */
    const updateSearchParam = useCallback(
        (key: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());

            if (value) {
                // Changing region resets chapter
                if (key === "region") {
                    params.set("chapter", "all");
                }

                params.set(key, value);
            } else {
                params.delete(key);
            }

            // Reset pagination whenever a filter changes
            params.set("offset", "0");

            startTransition(() => {
                router.replace(`/members?${params.toString()}`, {
                    scroll: false,
                });
            });
        },
        [router, searchParams],
    );

    /**
     * Update pagination without resetting the current page.
     */
    const updateOffsetParam = useCallback(
        (newOffset: number) => {
            const params = new URLSearchParams(searchParams.toString());

            params.set("offset", String(newOffset));

            startTransition(() => {
                router.replace(`/members?${params.toString()}`, {
                    scroll: false,
                });
            });
        },
        [router, searchParams],
    );

    /**
     * Reset all filters while preserving rows-per-page.
     */
    const handleResetFilters = useCallback(() => {
        const params = new URLSearchParams();

        // Preserve the current limit
        params.set("limit", String(limit));

        // Reset pagination
        params.set("offset", "0");

        startTransition(() => {
            router.replace(`/members?${params.toString()}`, {
                scroll: false,
            });
        });
    }, [router, limit]);

    /**
     * Keep local state synchronized with URL parameters.
     */
    const deps_regs = [
        searchParams.get("keyword"),
        searchParams.get("region"),
        searchParams.get("chapter"),
        searchParams.get("member_type"),
        searchParams.get("status"),
        searchParams.get("license_type"),
        searchParams.get("limit"),
        searchParams.get("offset"),
    ];

    useEffect(() => {
        setKeyword(searchParams.get("keyword") ?? "");
        setRegion(searchParams.get("region") ?? "all");
        setChapter(searchParams.get("chapter") ?? "all");
        setMemberStatus(searchParams.get("status") ?? "all");
        setMemberType(searchParams.get("member_type") ?? "all");
        setLicenseType(searchParams.get("license_type") ?? "all");
        setLimit(Number(searchParams.get("limit") ?? "5"));
        setOffset(Number(searchParams.get("offset") ?? "0"));
    }, deps_regs);

    /**
     * Determine whether any filter is currently active.
     */
    const hasActiveFilters =
        keyword !== "" ||
        region !== "all" ||
        chapter !== "all" ||
        member_status !== "all" ||
        member_type !== "all" ||
        license_type !== "all";

    /**
     * Pagination state.
     */
    const total_pages = Math.max(1, Math.ceil(props.total_members / limit));

    const current_page = Math.min(Math.floor(offset / limit) + 1, total_pages);

    const handleJumpToPage = useCallback(
        (page: number) => {
            if (pending) return;

            const clamped = Math.min(Math.max(page, 1), total_pages);

            updateOffsetParam((clamped - 1) * limit);
        },
        [pending, total_pages, limit, updateOffsetParam],
    );

    const handlePaginationNext = useCallback(() => {
        if (pending || current_page >= total_pages) {
            return;
        }

        updateOffsetParam(offset + limit);
    }, [pending, current_page, total_pages, offset, limit, updateOffsetParam]);

    const handlePaginationPrev = useCallback(() => {
        if (pending || current_page <= 1) {
            return;
        }

        updateOffsetParam(Math.max(0, offset - limit));
    }, [pending, current_page, offset, limit, updateOffsetParam]);

    return (
        <div>
            {/* Search */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="member-search">Search</Label>

                <Input
                    id="member-search"
                    disabled={pending || reload_pending}
                    className="w-[400px]"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateSearchParam("keyword", keyword.trim());
                        }
                    }}
                    placeholder="Search member"
                />
            </div>

            {/* Filters */}
            <div className="flex justify-between gap-4 py-4">
                <div className="flex flex-wrap gap-2">
                    {/* Region */}
                    <div className="flex flex-col gap-2">
                        <Label>Region</Label>

                        <Select
                            value={region}
                            onValueChange={(value) =>
                                updateSearchParam("region", value)
                            }
                            disabled={pending || reload_pending}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Region" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>

                                {props.regions_list.map((region) => (
                                    <SelectItem
                                        key={region.pkRegionsId}
                                        value={region.code}
                                    >
                                        {region.description}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Chapter */}
                    <div className="flex flex-col gap-2">
                        <Label>Chapter</Label>

                        <Select
                            value={chapter}
                            onValueChange={(value) =>
                                updateSearchParam("chapter", value)
                            }
                            disabled={pending || reload_pending}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chapter" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>

                                {props.member_chapters_select.map((chapter) => (
                                    <SelectItem
                                        key={chapter.pkChaptersId}
                                        value={chapter.code}
                                    >
                                        {chapter.description}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Member Type */}
                    <div className="flex flex-col gap-2">
                        <Label>Member Type</Label>

                        <Select
                            value={member_type}
                            onValueChange={(value) =>
                                updateSearchParam("member_type", value)
                            }
                            disabled={pending || reload_pending}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Member Type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>

                                <SelectItem value="Auxiliary">
                                    Auxiliary
                                </SelectItem>

                                <SelectItem value="Associate">
                                    Associate
                                </SelectItem>

                                <SelectItem value="Fellow">Fellow</SelectItem>

                                <SelectItem value="Life">Life</SelectItem>

                                <SelectItem value="Regular">Regular</SelectItem>

                                <SelectItem value="Senior">Senior</SelectItem>

                                <SelectItem value="NewMember">
                                    New Member
                                </SelectItem>

                                <SelectItem value="NewBoard">
                                    NewBoard
                                </SelectItem>

                                <SelectItem value="Honorary">
                                    Honorary
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col gap-2">
                        <Label>Status</Label>

                        <Select
                            value={member_status}
                            onValueChange={(value: MemberStatusType) =>
                                updateSearchParam("status", value)
                            }
                            disabled={pending || reload_pending}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>

                                <SelectItem value="active">Active</SelectItem>

                                <SelectItem value="inactive">
                                    Inactive
                                </SelectItem>

                                <SelectItem value="dormant">Dormant</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* License Type */}
                    <div className="flex flex-col gap-2">
                        <Label>License Type</Label>

                        <Select
                            value={license_type}
                            onValueChange={(value: LicenseType) =>
                                updateSearchParam("license_type", value)
                            }
                            disabled={pending || reload_pending}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="License Type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>

                                <SelectItem value="BSEE">BSEE</SelectItem>

                                <SelectItem value="RME">RME</SelectItem>

                                <SelectItem value="REE">REE</SelectItem>

                                <SelectItem value="PEE">PEE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Right-side Actions */}
                <div className="flex shrink-0 items-end justify-end gap-2">
                    {/* Reset */}
                    <Button
                        variant="outline"
                        onClick={handleResetFilters}
                        disabled={
                            pending || reload_pending || !hasActiveFilters
                        }
                        className="gap-2"
                    >
                        <RotateCcw className="size-4" />
                        Reset
                    </Button>

                    {/* Refresh */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleReload}
                        disabled={reload_pending}
                    >
                        <RotateCw
                            className={`size-4 ${
                                reload_pending ? "animate-spin" : ""
                            }`}
                        />
                    </Button>

                    {/* Rows per page */}
                    <Select
                        value={String(limit)}
                        onValueChange={(value) =>
                            updateSearchParam("limit", value)
                        }
                        disabled={pending || reload_pending}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Limit" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="5">5 rows</SelectItem>

                            <SelectItem value="10">10 rows</SelectItem>

                            <SelectItem value="20">20 rows</SelectItem>

                            <SelectItem value="50">50 rows</SelectItem>

                            <SelectItem value="100">100 rows</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            <div className="relative">
                {pending && (
                    <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <Loader2 className="animate-spin text-blue-500" />
                            Loading...
                        </div>
                    </div>
                )}
                {reload_pending && (
                    <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <Loader2 className="animate-spin text-blue-500" />
                            Getting fresh data...
                        </div>
                    </div>
                )}

                {props.children}
            </div>

            {/* Pagination */}
            <div>
                <MembersTablePagination
                    current_page={current_page}
                    pages={total_pages}
                    onJumpToPageAction={handleJumpToPage}
                    onPaginationNextAction={handlePaginationNext}
                    onPaginationPrevAction={handlePaginationPrev}
                />
            </div>
        </div>
    );
}
