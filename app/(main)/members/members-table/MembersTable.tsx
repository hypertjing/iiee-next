"use client";

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import { Loader2, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { UserProfile } from "@/types";
import Link from "next/link";
import { useState } from "react";

export const columns: ColumnDef<UserProfile>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) =>
    //                 table.toggleAllPageRowsSelected(!!value)
    //             }
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },

    {
        accessorKey: "rfidNo",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    RFID No.
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ArrowUpDown />
                    </Button> */}
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("rfidNo") || "--"}</div>
        ),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "qrCode",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    QR Code
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ArrowUpDown />
                    </Button> */}
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("qrCode") || "--"}</div>
        ),
    },
    {
        accessorKey: "lname",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Last Name
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ArrowUpDown />
                    </Button> */}
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("lname")}</div>
        ),
    },
    {
        accessorKey: "fname",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    First Name
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ArrowUpDown />
                    </Button> */}
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("fname")}</div>
        ),
    },
    {
        accessorKey: "mname",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Middle Name
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ArrowUpDown />
                    </Button> */}
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("mname")}</div>
        ),
    },

    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    Email
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        <ArrowUpDown />
                    </Button> */}
                </div>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("email")}</div>
        ),
    },

    {
        accessorKey: "memberType",
        header: () => <div>Member Type</div>,
        cell: ({ row }) => {
            return <div>{row.getValue("memberType")}</div>;
        },
    },
    {
        accessorKey: "membershipNo",
        header: () => <div>Member No.</div>,
        cell: ({ row }) => {
            return <div>{row.getValue("membershipNo")}</div>;
        },
    },
    {
        accessorKey: "akUserProfilesFlag",
        header: () => <div>Status</div>,
        cell: ({ row }) => {
            return <div>{row.getValue("akUserProfilesFlag")}</div>;
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const userprofile = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <Link
                                href={`/members/${userprofile.pkUserProfilesId}`}
                            >
                                View complete profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export function MembersTable(props: {
    data: UserProfile[];
    pending: boolean;
    pageSize: number;
}) {
    const data: UserProfile[] = props.data;

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    // const [rowSelection, setRowSelection] = useState({});
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: props.pageSize, // 👈 default row limit (was 10 by default)
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            pagination,
        },
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
    });

    return (
        <>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="relative">
                        {props.pending && (
                            <TableRow className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                                <TableCell
                                    colSpan={columns.length}
                                    className="flex items-center gap-2"
                                >
                                    <Loader2 className="animate-spin text-blue-500" />{" "}
                                    Loading...
                                </TableCell>
                            </TableRow>
                        )}

                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
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
