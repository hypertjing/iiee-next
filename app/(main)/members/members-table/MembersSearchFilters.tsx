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
import { useCallback, useEffect, useState } from "react";
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

    // Loading state for filter/search/pagination navigation
    const [loading, setLoading] = useState(false);

    // Separate loading state for cache/data refresh
    const [reload_pending, setReloadPending] = useState(false);

    /**
     * Reload cached member data.
     */
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

            setLoading(true);

            router.replace(`/members?${params.toString()}`, {
                scroll: false,
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

            setLoading(true);

            router.replace(`/members?${params.toString()}`, {
                scroll: false,
            });
        },
        [router, searchParams],
    );

    /**
     * Reset all filters while preserving rows-per-page.
     */
    const handleResetFilters = useCallback(() => {
        const params = new URLSearchParams();

        // Preserve rows per page
        params.set("limit", String(limit));

        // Reset pagination
        params.set("offset", "0");

        setLoading(true);

        router.replace(`/members?${params.toString()}`, {
            scroll: false,
        });
    }, [router, limit]);

    /**
     * Keep local state synchronized with URL parameters.
     *
     * Once Next.js has applied the new URL,
     * this effect runs and ends the loading state.
     */
    const keywordParam = searchParams.get("keyword");
    const regionParam = searchParams.get("region");
    const chapterParam = searchParams.get("chapter");
    const statusParam = searchParams.get("status");
    const memberTypeParam = searchParams.get("member_type");
    const licenseTypeParam = searchParams.get("license_type");
    const limitParam = searchParams.get("limit");
    const offsetParam = searchParams.get("offset");

    useEffect(() => {
        setKeyword(keywordParam ?? "");
        setRegion(regionParam ?? "all");
        setChapter(chapterParam ?? "all");
        setMemberStatus(statusParam ?? "all");
        setMemberType(memberTypeParam ?? "all");
        setLicenseType(licenseTypeParam ?? "all");
        setLimit(Number(limitParam ?? "5"));
        setOffset(Number(offsetParam ?? "0"));

        // URL has finished updating
        setLoading(false);
    }, [
        keywordParam,
        regionParam,
        chapterParam,
        statusParam,
        memberTypeParam,
        licenseTypeParam,
        limitParam,
        offsetParam,
    ]);

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
            if (loading || reload_pending) return;

            const clamped = Math.min(Math.max(page, 1), total_pages);

            updateOffsetParam((clamped - 1) * limit);
        },
        [loading, reload_pending, total_pages, limit, updateOffsetParam],
    );

    const handlePaginationNext = useCallback(() => {
        if (loading || reload_pending || current_page >= total_pages) {
            return;
        }

        updateOffsetParam(offset + limit);
    }, [
        loading,
        reload_pending,
        current_page,
        total_pages,
        offset,
        limit,
        updateOffsetParam,
    ]);

    const handlePaginationPrev = useCallback(() => {
        if (loading || reload_pending || current_page <= 1) {
            return;
        }

        updateOffsetParam(Math.max(0, offset - limit));
    }, [
        loading,
        reload_pending,
        current_page,
        offset,
        limit,
        updateOffsetParam,
    ]);

    const isBusy = loading || reload_pending;

    return (
        <div>
            {/* Search + Filters */}
            <div className="mb-4 rounded-xl border bg-white p-5">
                {/* Search */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="member-search">Search</Label>

                    <Input
                        id="member-search"
                        disabled={isBusy}
                        className="w-[400px] bg-white"
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
                                disabled={isBusy}
                            >
                                <SelectTrigger className="w-[180px] bg-white">
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
                                disabled={isBusy}
                            >
                                <SelectTrigger className="w-[180px] bg-white">
                                    <SelectValue placeholder="Chapter" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>

                                    {props.member_chapters_select.map(
                                        (chapter) => (
                                            <SelectItem
                                                key={chapter.pkChaptersId}
                                                value={chapter.code}
                                            >
                                                {chapter.description}
                                            </SelectItem>
                                        ),
                                    )}
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
                                disabled={isBusy}
                            >
                                <SelectTrigger className="w-[180px] bg-white">
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

                                    <SelectItem value="Fellow">
                                        Fellow
                                    </SelectItem>

                                    <SelectItem value="Life">Life</SelectItem>

                                    <SelectItem value="Regular">
                                        Regular
                                    </SelectItem>

                                    <SelectItem value="Senior">
                                        Senior
                                    </SelectItem>

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
                                disabled={isBusy}
                            >
                                <SelectTrigger className="w-[180px] bg-white">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>

                                    <SelectItem value="active">
                                        Active
                                    </SelectItem>

                                    <SelectItem value="inactive">
                                        Inactive
                                    </SelectItem>

                                    <SelectItem value="dormant">
                                        Dormant
                                    </SelectItem>
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
                                disabled={isBusy}
                            >
                                <SelectTrigger className="w-[180px] bg-white">
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

                    {/* Actions */}
                    <div className="flex shrink-0 items-end justify-end gap-2">
                        {/* Reset */}
                        <Button
                            variant="outline"
                            onClick={handleResetFilters}
                            disabled={isBusy || !hasActiveFilters}
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
                            disabled={isBusy}
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
                            disabled={isBusy}
                        >
                            <SelectTrigger className="w-[180px] bg-white">
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
            </div>

            {/* Table */}
            <div className="relative">
                {isBusy && (
                    <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <Loader2 className="animate-spin text-blue-500" />

                            {reload_pending
                                ? "Getting fresh data..."
                                : "Loading..."}
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
