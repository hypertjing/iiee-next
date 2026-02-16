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
import { MemberChapters, MemberRegionChapter, MemberRegions } from "@/types";
import { Loader2, Search, Users } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import {
    getUserProfilesAction,
    LicenseType,
    MemberStatusType,
} from "../actions";
import MemberStatusDashboard from "../dashboard/MemberStatusDashboard";
import { MembersTable } from "./MembersTable";
import MembersTablePagination from "./MembersTablePagination";

export default function Member(props: {
    regions_list: MemberRegions[];
    chapters_list: MemberChapters[];
}) {
    const [member_regions, setMemberRegions] = useState("all");
    const [member_chapters, setMemberChapters] = useState("all");
    const [member_type, setMemberType] = useState("all");
    const [member_status, setMemberStatus] = useState<MemberStatusType>("all");
    const [license_type, setLicenseType] = useState<LicenseType>("all");

    const [keyword, setKeyword] = useState("");
    const [max_page, setMaxPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [current_page, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(0);
    const [active_member, setActiveMember] = useState(0);
    const [inactive_member, setInactiveMember] = useState(0);
    const [dormant_member, setDormantMember] = useState(0);
    const [user_profiles, setUserProfiles] = useState<MemberRegionChapter[]>(
        [],
    );
    const [pending, startTransition] = useTransition();

    async function getUserProfiles() {
        startTransition(async () => {
            // const res = await fetch(
            //     `/api/members?offset=${offset}&limit=${limit}&search_keyword=${keyword}&member_type=${member_type}`
            // );
            // const data = await res.json();
            const data = await getUserProfilesAction({
                keyword,
                region: member_regions,
                chapter: member_chapters,
                member_type,
                license_type: license_type,
                status: member_status,
                offset,
                limit,
            });

            // const fetcher = (url: string) =>
            //     fetch(url).then((res) => res.json());

            // const { data, error, isLoading } = useSWR(
            //     "/api/members?offset=110&limit=10&keyword=all&region=all&chapter=all&member_type=all",
            //     fetcher,
            //     {
            //         revalidateOnFocus: false, // don’t refetch when tab is focused
            //         dedupingInterval: 10000, // cache time (10s)
            //     }
            // );

            // const data = await fetch(
            //     `/api/members?offset=${offset}&limit=${limit}&keyword=${keyword}&region=${member_regions}&chapter=${member_chapters}&member_type=${member_type}`
            // ).then((res) => res.json());

            setActiveMember(data.active_member);
            setInactiveMember(data.inactive_member);
            setDormantMember(data.dormant_member);

            setUserProfiles(data.members);
            setMaxPage(data.max_page);
            setPages(Math.ceil(data.max_page / limit));
            if (max_page != data.max_page) {
                jumpToPage(1);
            }
        });
    }

    function jumpToPage(page: number) {
        setCurrentPage(page);
        setOffset((page - 1) * limit);
    }

    function prevPagination() {
        setOffset(offset - 10);
        setCurrentPage(current_page - 1);
    }

    function nextPagination() {
        setOffset(offset + 10);
        setCurrentPage(current_page + 1);
    }

    const [mtc_pending, startTransitionMTC] = useTransition();
    async function handleMemberTypeChange(value: string) {
        startTransitionMTC(async () => {
            setMemberType(value);
        });
        getUserProfiles();
    }

    function handleLimitChange(value: string) {
        setLimit(parseInt(value));
    }

    useEffect(() => {
        getUserProfiles();
    }, [member_regions]);

    useEffect(() => {
        getUserProfiles();
    }, [member_chapters]);

    useEffect(() => {
        getUserProfiles();
    }, [member_type]);

    useEffect(() => {
        getUserProfiles();
    }, [member_status]);

    useEffect(() => {
        getUserProfiles();
    }, [license_type]);

    useEffect(() => {
        getUserProfiles();
    }, [offset]);

    useEffect(() => {
        setPages(Math.ceil(max_page / limit));

        if (current_page != 1) {
            jumpToPage(1);
        } else {
            getUserProfiles();
        }
    }, [limit]);

    return (
        <>
            <div className="mb-10 flex gap-2 w-[400px]">
                <div className="w-full">
                    <div className="text-lg font-semibold flex items-center gap-2 mb-5">
                        <Users className="w-5 h-5 text-blue-500" />
                        Member Overview
                    </div>
                    <div className="">
                        <MemberStatusDashboard
                            totalMembers={max_page}
                            activeCount={active_member}
                            inactiveCount={inactive_member}
                            dormantCount={dormant_member}
                        />
                    </div>
                </div>
                {/* <div className="w-full ">
                    <div className="text-lg font-semibold flex items-center gap-2 mb-5">
                        <Users className="w-5 h-5 text-blue-500" />
                        License Status Overview
                    </div>
                    <div className="">
                        <MemberStatusDashboard
                            totalMembers={max_page}
                            activeCount={active_member}
                            inactiveCount={inactive_member}
                        />
                    </div>
                </div> */}
            </div>
            {/* Search filters  */}
            <div className="flex flex-col gap-2">
                <Label>Search</Label>
                <form className="flex gap-2" action={getUserProfiles}>
                    <Input
                        className="w-[400px]"
                        onChange={(e) => setKeyword(e.target.value)}
                        value={keyword}
                        placeholder="Search member"
                    />
                    <Button
                        disabled={pending}
                        variant={"iieeblue"}
                        onClick={getUserProfiles}
                    >
                        {pending ? (
                            <>
                                <Loader2 className="animate-spin" />{" "}
                                Searching...
                            </>
                        ) : (
                            <>
                                <Search /> Search
                            </>
                        )}
                    </Button>
                </form>
            </div>
            <div className="flex justify-between py-4">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <Label>Region</Label>
                        <Select
                            onValueChange={(value) => setMemberRegions(value)}
                            defaultValue="all"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Region" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"all"}>All</SelectItem>
                                {props.regions_list.map((region) => (
                                    <SelectItem
                                        value={region.code}
                                        key={region.pkRegionsId}
                                    >
                                        {region.description}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Chapter</Label>
                        <Select
                            onValueChange={(value) => setMemberChapters(value)}
                            defaultValue="all"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chapter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"all"}>All</SelectItem>
                                {props.chapters_list.map((region) => (
                                    <SelectItem
                                        value={region.code}
                                        key={region.pkChaptersId}
                                    >
                                        {region.description}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Member Type</Label>
                        <Select
                            onValueChange={(value) => setMemberType(value)}
                            defaultValue="all"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Member Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"all"}>All</SelectItem>
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
                    <div className="flex flex-col gap-2">
                        <Label>Status</Label>
                        <Select
                            onValueChange={(value: MemberStatusType) =>
                                setMemberStatus(value)
                            }
                            defaultValue="all"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chapter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"all"}>All</SelectItem>
                                <SelectItem value={"active"}>Active</SelectItem>
                                <SelectItem value={"inactive"}>
                                    Inactive
                                </SelectItem>
                                <SelectItem value={"dormant"}>
                                    Dormant
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>License Type</Label>
                        <Select
                            onValueChange={(value: LicenseType) =>
                                setLicenseType(value)
                            }
                            defaultValue="all"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Chapter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"all"}>All</SelectItem>
                                <SelectItem value={"BSEE"}>BSEE</SelectItem>
                                <SelectItem value={"RME"}>RME</SelectItem>
                                <SelectItem value={"REE"}>REE</SelectItem>
                                <SelectItem value={"PEE"}>PEE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-end">
                    {/* <Label>Row</Label> */}
                    <Select
                        onValueChange={(value) => handleLimitChange(value)}
                        defaultValue="10"
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Limit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10 rows</SelectItem>
                            <SelectItem value="20">20 rows</SelectItem>
                            <SelectItem value="50">50 rows</SelectItem>
                            <SelectItem value="100">100 rows</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <MembersTable
                pending={pending}
                data={user_profiles}
                pageSize={limit}
            />
            {pending && max_page == 0 ? (
                "Loading..."
            ) : (
                <>
                    <MembersTablePagination
                        current_page={current_page}
                        pages={pages}
                        onJumpToPageAction={jumpToPage}
                        onPaginationNextAction={nextPagination}
                        onPaginationPrevAction={prevPagination}
                    />
                </>
            )}
        </>
    );
}

// Meron akong nahuling nagcheat kanina and I would like to remind you that academic dishonesty is taken very seriously. Wag nyong sirain ang tiwala ko sa inyo. I can easily give you 1 extra year dito sa university, and you’ll end up finishing your BS degree in your 5th year or even 6th year.
