import { Eye } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { getUser } from "@/app/lib/dal";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MemberRegionChapter } from "@/types";

import LicenseAndValidity from "./cell-values/LicenseAndValidity";
import { MemberIdentity } from "./cell-values/MemberIdentity";
import MemberSanitizationRemarksServer from "./cell-values/MemberSanitizationRemarksServer";
import { MembershipStatus } from "./cell-values/MembershipStatus";
import { RegionChapter } from "./cell-values/RegionChapter";

export async function MembersTable(props: { data: MemberRegionChapter[] }) {
    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    // await sleep(5000);

    const user_position_code = user.account.fkUserControlCode;

    const allowed_positions = [
        "NP",
        "Rgov",
        "ChapterPresidents",
        "Super Admin",
        "MCDC",
    ];

    const member_visible = allowed_positions.includes(user_position_code);

    const data = props.data;

    const columnCount = member_visible ? 7 : 6;

    return (
        <div className="overflow-hidden rounded-xl border bg-background">
            <Table>
                <TableHeader className="bg-white">
                    <TableRow className="hover:bg-transparent">
                        {member_visible && (
                            <TableHead className="h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                Member
                            </TableHead>
                        )}

                        <TableHead className="h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Membership
                        </TableHead>

                        <TableHead className="hidden h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground xl:table-cell">
                            Region & Chapter
                        </TableHead>

                        <TableHead className="hidden h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground 2xl:table-cell">
                            Licenses
                        </TableHead>

                        <TableHead className="h-12 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Remarks
                        </TableHead>

                        <TableHead className="h-12 px-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.length > 0 ? (
                        data.map((data) => (
                            <TableRow
                                key={data.userprofiles.pkUserProfilesId}
                                className="group border-b transition-colors hover:bg-muted/40"
                            >
                                {/* Member */}
                                {member_visible && (
                                    <TableCell className="px-4 py-4 align-top">
                                        <MemberIdentity
                                            firstName={data.userprofiles.fname}
                                            middleName={data.userprofiles.mname}
                                            lastName={data.userprofiles.lname}
                                            membershipNo={
                                                data.userprofiles.membershipNo
                                            }
                                        />
                                    </TableCell>
                                )}

                                {/* Membership */}
                                <TableCell className="px-4 py-4 align-top">
                                    <MembershipStatus
                                        membershipValidity={
                                            data.userprofiles.membershipValidity
                                        }
                                        membershipType={
                                            data.userprofiles.memberType
                                        }
                                    />
                                </TableCell>

                                {/* Region & Chapter */}
                                <TableCell className="hidden px-4 py-4 align-top xl:table-cell">
                                    <RegionChapter
                                        region={data.region}
                                        chapter={data.chapter}
                                    />
                                </TableCell>

                                {/* Licenses */}
                                <TableCell className="hidden px-4 py-4 align-top 2xl:table-cell">
                                    {data.userlicense == null ||
                                    data.userlicense.length === 0 ? (
                                        <span className="text-sm text-muted-foreground">
                                            No license
                                        </span>
                                    ) : (
                                        <div className="">
                                            {data.userlicense.map(
                                                (userlicense, index) => (
                                                    <LicenseAndValidity
                                                        key={
                                                            userlicense.pkUserLicenseId
                                                        }
                                                        index={index + 1}
                                                        number_of_licenses={
                                                            data.userlicense
                                                                ?.length
                                                        }
                                                        userlicense={
                                                            userlicense
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    )}
                                </TableCell>

                                {/* Remarks */}
                                <TableCell className="px-4 py-4 align-top">
                                    <Suspense
                                        fallback={
                                            <Skeleton className="h-[25px] w-full" />
                                        }
                                    >
                                        <MemberSanitizationRemarksServer
                                            member_id={
                                                data.userprofiles
                                                    .pkUserProfilesId
                                            }
                                        />
                                    </Suspense>
                                </TableCell>

                                {/* Action */}
                                <TableCell className="px-4 py-4 text-center align-top">
                                    <Link
                                        prefetch={true}
                                        href={`/members/${data.userprofiles.pkUserProfilesId}`}
                                    >
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="transition-colors group-hover:bg-background"
                                        >
                                            <Eye className="size-4" />
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columnCount}
                                className="h-32 text-center"
                            >
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <span className="font-medium">
                                        No members found
                                    </span>

                                    <span className="text-sm text-muted-foreground">
                                        Try adjusting your search or filters.
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
