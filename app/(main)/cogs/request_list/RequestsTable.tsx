"use client";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CogsRequest } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { format } from "date-fns";
import { Dot } from "lucide-react";
import Link from "next/link";
import UserInfo from "./UserInfo";
import { StatusBadge } from "./[request_id]/StatusBadge";

const queryClient = new QueryClient();

export default function RequestsTable({
    requests,
}: {
    requests: CogsRequest[];
}) {
    return (
        <>
            <Table>
                <TableCaption>All submitted COGS requests.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Requestor</TableHead>
                        <TableHead>Amount Due</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date Requested</TableHead>
                        <TableHead>Date Modified</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requests.map((req) => (
                        <TableRow key={req.id}>
                            {/* <TableCell>{req.id}</TableCell> */}
                            <TableCell>
                                <QueryClientProvider client={queryClient}>
                                    <div className="flex items-center">
                                        <UserInfo user_id={req.user_id} />
                                        {!req.viewed && (
                                            <Dot
                                                size={50}
                                                className="animate-pulse text-red-500"
                                            />
                                        )}
                                    </div>
                                </QueryClientProvider>
                            </TableCell>
                            <TableCell>₱{req.amount_due}</TableCell>

                            <TableCell>
                                <StatusBadge status={req.status} />
                            </TableCell>
                            <TableCell>
                                {req.created_at
                                    ? format(
                                          new Date(req.created_at),
                                          "MMM d, yyyy hh:mm a"
                                      )
                                    : "—"}
                            </TableCell>
                            <TableCell>
                                {req.updated_at
                                    ? format(
                                          new Date(req.updated_at),
                                          "MMM d, yyyy hh:mm a"
                                      )
                                    : "—"}
                            </TableCell>
                            <TableCell>
                                <Link href={`/cogs/request_list/${req.id}`}>
                                    <Button variant="outline" size="sm">
                                        View Details
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
