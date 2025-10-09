import { Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { isExpired } from "@/lib/utils";
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
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Region</TableHead>
                            <TableHead>Chapter</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>First Name</TableHead>
                            <TableHead>Middle Name</TableHead>
                            {/* <TableHead>Email</TableHead> */}
                            <TableHead>Member Type</TableHead>
                            <TableHead>Member No.</TableHead>
                            <TableHead>Validity</TableHead>
                            <TableHead>Status</TableHead>
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
                                        className="hover:bg-blue-100"
                                    >
                                        <TableCell>
                                            {data.region?.description}
                                        </TableCell>
                                        <TableCell>
                                            {data.chapter?.description || "N/A"}
                                        </TableCell>
                                        <TableCell>
                                            {data.userprofiles.lname}
                                        </TableCell>
                                        <TableCell>
                                            {data.userprofiles.fname}
                                        </TableCell>
                                        <TableCell>
                                            {data.userprofiles.mname}
                                        </TableCell>
                                        {/* <TableCell>
                                            {data.userprofiles.email}
                                        </TableCell> */}
                                        <TableCell>
                                            {data.userprofiles.memberType}
                                        </TableCell>
                                        <TableCell>
                                            {data.userprofiles.membershipNo}
                                        </TableCell>
                                        <TableCell
                                            className={`flex items-center gap-2 ${
                                                isExpired(
                                                    data.userprofiles
                                                        .membershipValidity
                                                )
                                                    ? "text-red-600"
                                                    : ""
                                            }`}
                                        >
                                            {data.userprofiles.membershipValidity.getFullYear() !=
                                            3000
                                                ? format(
                                                      new Date(
                                                          data.userprofiles.membershipValidity
                                                      ),
                                                      "MMM d, yyyy"
                                                  )
                                                : "Life"}
                                            {/* {isExpired(
                                                data.userprofiles
                                                    .membershipValidity
                                            ) && (
                                                <>
                                                    <Badge className="bg-red-600">
                                                        Expired
                                                    </Badge>
                                                </>
                                            )} */}
                                        </TableCell>
                                        <TableCell>
                                            {isExpired(
                                                data.userprofiles
                                                    .membershipValidity
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
