import { Eye, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useUserContext } from "@/contexts/user-context";
import { isExpired, isValidDateString } from "@/lib/utils";
import { MemberRegionChapter } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import MemberSanitizationRemarks from "./MemberSanitizationRemarks";

export function MembersTable(props: {
    data: MemberRegionChapter[];
    pending: boolean;
    pageSize: number;
}) {
    const user = useUserContext();
    // const user_position_code: string = "P1";
    const user_position_code = user.poistion.code;
    const member_visible =
        user_position_code === "P1" || user_position_code === "C1"
            ? true
            : false;
    const data: MemberRegionChapter[] = props.data;

    return (
        <>
            <div className="overflow-hidden border rounded-md border-gray-300">
                <Table className="overflow-hidden rounded-md border [&_th]:border [&_th]:border-gray-300 [&_td]:border [&_td]:border-gray-300">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Remarks</TableHead>

                            <TableHead>Region</TableHead>
                            <TableHead>Chapter</TableHead>
                            {member_visible && <TableHead>Full Name</TableHead>}
                            <TableHead>Member Type</TableHead>
                            <TableHead>Member No.</TableHead>
                            <TableHead>Validity</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>License</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="relative">
                        {props.pending && (
                            <TableRow className="border-0 absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                                <div
                                    // colSpan={9}
                                    className="flex items-center gap-2 border-0"
                                >
                                    <Loader2 className="animate-spin text-blue-500" />{" "}
                                    Loading...
                                </div>
                            </TableRow>
                        )}

                        {data.length ? (
                            <>
                                {data.map((data) => (
                                    <TableRow
                                        key={data.userprofiles.pkUserProfilesId}
                                        className="hover:bg-sky-100"
                                    >
                                        <TableCell className="align-top">
                                            <MemberSanitizationRemarks
                                                member_id={
                                                    data.userprofiles
                                                        .pkUserProfilesId
                                                }
                                            />
                                        </TableCell>

                                        <TableCell className="align-top">
                                            {data.region?.description}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            {data.chapter?.description || "N/A"}
                                        </TableCell>
                                        {member_visible && (
                                            <TableCell className="align-top">
                                                {data.userprofiles.lname},{" "}
                                                {data.userprofiles.fname}{" "}
                                                {data.userprofiles.mname}
                                            </TableCell>
                                        )}
                                        <TableCell className="align-top">
                                            {data.userprofiles.memberType}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            {data.userprofiles.membershipNo}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div
                                                className={` ${
                                                    isExpired(
                                                        data.userprofiles
                                                            .membershipValidity,
                                                    )
                                                        ? "text-red-600"
                                                        : ""
                                                }`}
                                            >
                                                {data.userprofiles.membershipValidity.getFullYear() !=
                                                3000
                                                    ? format(
                                                          new Date(
                                                              data.userprofiles
                                                                  .membershipValidity,
                                                          ),
                                                          "MMM d, yyyy",
                                                      )
                                                    : "Life"}
                                            </div>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            {isExpired(
                                                data.userprofiles
                                                    .membershipValidity,
                                            ) === true && (
                                                <div className="text-white bg-red-500 px-2 py-1 text-center">
                                                    Inactive
                                                </div>
                                            )}

                                            {isExpired(
                                                data.userprofiles
                                                    .membershipValidity,
                                            ) === false && (
                                                <div className="text-white bg-green-600 px-2 py-1 text-center">
                                                    Active
                                                </div>
                                            )}

                                            {isExpired(
                                                data.userprofiles
                                                    .membershipValidity,
                                            ) === "dormant" && (
                                                <div className="text-white bg-amber-500 px-2 py-1 text-center">
                                                    Dormant
                                                </div>
                                            )}

                                            {/* {isExpired(
                                                data.userprofiles
                                                    .membershipValidity,
                                            ) ? (
                                                <>
                                                    <Badge className="text-red-700 bg-red-100">
                                                        Inactive
                                                    </Badge>
                                                </>
                                            ) : (
                                                <>
                                                    <Badge className="text-green-800 bg-green-200">
                                                        Active
                                                    </Badge>
                                                </>
                                            )} */}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            {data.userlicense == null ? (
                                                "No license"
                                            ) : (
                                                <div className="space-y-1">
                                                    {data.userlicense.map(
                                                        (userlicense) => (
                                                            <div
                                                                key={
                                                                    userlicense.pkUserLicenseId
                                                                }
                                                                className={`${
                                                                    isExpired(
                                                                        new Date(
                                                                            userlicense.validityDate,
                                                                        ),
                                                                    ) ||
                                                                    !isValidDateString(
                                                                        userlicense.validityDate,
                                                                    )
                                                                        ? "text-white bg-red-600 text-center"
                                                                        : "text-white bg-green-600 text-center"
                                                                } px-2 py-1 flex justify-between gap-1`}
                                                            >
                                                                <div>
                                                                    {
                                                                        userlicense.licenseType
                                                                    }{" "}
                                                                    {
                                                                        userlicense.licenseNo
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {isValidDateString(
                                                                        userlicense.validityDate,
                                                                    ) ? (
                                                                        Intl.DateTimeFormat(
                                                                            undefined,
                                                                            {
                                                                                month: "short",
                                                                                day: "2-digit",
                                                                                year: "numeric",
                                                                            },
                                                                        ).format(
                                                                            new Date(
                                                                                userlicense.validityDate,
                                                                            ),
                                                                        )
                                                                    ) : (
                                                                        <span>
                                                                            {/* Invalid
                                                                            Expiry
                                                                            Date */}
                                                                            {
                                                                                userlicense.validityDate
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <Link
                                                href={`/members/${data.userprofiles.pkUserProfilesId}`}
                                            >
                                                <Button
                                                    variant={"outline"}
                                                    size={"sm"}
                                                >
                                                    <Eye />
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <TableRow className="border-0">
                                <TableCell
                                    colSpan={9}
                                    className="h-24 text-center border-0"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
