"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UserProfile } from "@/types";
import { Loader2, Search } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { getUserProfilesAction } from "../actions";
import { MembersTable } from "./MembersTable";
import MembersTablePagination from "./MembersTablePagination";

export default function Member() {
    const [member_type, setMemberType] = useState("all");
    const [keyword, setKeyword] = useState("");
    const [max_page, setMaxPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [current_page, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(0);
    const [user_profiles, setUserProfiles] = useState<UserProfile[]>([]);
    const [pending, startTransition] = useTransition();

    async function getUserProfiles() {
        startTransition(async () => {
            // const res = await fetch(
            //     `/api/members?offset=${offset}&limit=${limit}&search_keyword=${keyword}&member_type=${member_type}`
            // );
            // const data = await res.json();
            const data = await getUserProfilesAction(
                keyword,
                member_type,
                offset,
                limit
            );

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
    }, [member_type]);

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
            {/* {offset} {limit} */}
            <div className="flex justify-between py-4">
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
                <div className="flex gap-2">
                    <Select
                        onValueChange={(value) => setMemberType(value)}
                        defaultValue="all"
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Member Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"all"}>All</SelectItem>
                            <SelectItem value="Auxiliary">Auxiliary</SelectItem>
                            <SelectItem value="Associate">Associate</SelectItem>
                            <SelectItem value="Fellow">Fellow</SelectItem>
                            <SelectItem value="Life">Life</SelectItem>
                            <SelectItem value="Regular">Regular</SelectItem>
                            <SelectItem value="Senior">Senior</SelectItem>
                            <SelectItem value="NewMember">NewMember</SelectItem>
                            <SelectItem value="NewBoard">NewBoard</SelectItem>
                            <SelectItem value="Honorary">Honorary</SelectItem>
                        </SelectContent>
                    </Select>
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
