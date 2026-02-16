import { Loader2 } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { isExpired, isValidDateString } from "@/lib/utils";
import { MemberRegionChapter } from "@/types";
import { format } from "date-fns";

export function MembersTable(props: {
    data: MemberRegionChapter[];
    pending: boolean;
    pageSize: number;
}) {
    const data: MemberRegionChapter[] = props.data;

    return (
        <>
            <div className="overflow-hidden border rounded-md border-gray-300">
                <Table className="overflow-hidden rounded-md border [&_th]:border [&_th]:border-gray-300 [&_td]:border [&_td]:border-gray-300">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Region</TableHead>
                            <TableHead>Chapter</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Member Type</TableHead>
                            <TableHead>Member No.</TableHead>
                            <TableHead>Validity</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>License</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="relative">
                        {props.pending && (
                            <TableRow className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                                <TableCell
                                    colSpan={9}
                                    className="flex items-center gap-2"
                                >
                                    <Loader2 className="animate-spin text-blue-500" />{" "}
                                    Loading...
                                </TableCell>
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
                                            {data.region?.description}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            {data.chapter?.description || "N/A"}
                                        </TableCell>
                                        <TableCell className="align-top">
                                            {data.userprofiles.lname},{" "}
                                            {data.userprofiles.fname}{" "}
                                            {data.userprofiles.mname}
                                        </TableCell>
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
                                                                            Invalid
                                                                            Expiry
                                                                            Date
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={9}
                                    className="h-24 text-center"
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
