"use client";

import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MembersTablePagination(props: {
    current_page: number;
    pages: number;
    onJumpToPageAction: (page: number) => void;
    onPaginationNextAction: () => void;
    onPaginationPrevAction: () => void;
}) {
    if (props.pages <= 1) {
        return (
            <Pagination className="justify-end py-4">
                <PaginationContent>
                    <PaginationItem>
                        <Button variant={"ghost"} disabled>
                            <ChevronLeft /> Previous
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                        <Button
                            disabled
                            variant={"ghost"}
                            size={"icon"}
                            className="bg-gray-200"
                        >
                            1
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                        <Button variant={"ghost"} disabled>
                            Next <ChevronRight />
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        );
    }

    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-muted-foreground flex-1 text-sm">
                1 row(s) selected.
            </div>
            <div className="space-x-2">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                variant={"ghost"}
                                onClick={props.onPaginationPrevAction}
                                disabled={props.current_page === 1}
                            >
                                <ChevronLeft /> Previous
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                                onClick={() => props.onJumpToPageAction(1)}
                                className={`${
                                    props.current_page === 1 && "bg-gray-200"
                                }`}
                            >
                                1
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                                onClick={() => props.onJumpToPageAction(2)}
                                className={`${
                                    props.current_page === 2 && "bg-gray-200"
                                }`}
                            >
                                2
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        {props.current_page < 3 ||
                        props.current_page > props.pages - 2 ? (
                            <>
                                <PaginationItem>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            props.onJumpToPageAction(
                                                Math.floor(props.pages / 2) - 1
                                            )
                                        }
                                        className={`${
                                            props.current_page ===
                                                Math.floor(props.pages / 2) -
                                                    1 && "bg-gray-200"
                                        }`}
                                    >
                                        {Math.floor(props.pages / 2) - 1}
                                    </Button>
                                </PaginationItem>
                                <PaginationItem>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            props.onJumpToPageAction(
                                                Math.floor(props.pages / 2)
                                            )
                                        }
                                        className={`${
                                            props.current_page ===
                                                Math.floor(props.pages / 2) &&
                                            "bg-gray-200"
                                        }`}
                                    >
                                        {Math.floor(props.pages / 2)}
                                    </Button>
                                </PaginationItem>
                                <PaginationItem>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            props.onJumpToPageAction(
                                                Math.floor(props.pages / 2) + 1
                                            )
                                        }
                                        className={`${
                                            props.current_page ===
                                                Math.floor(props.pages / 2) +
                                                    1 && "bg-gray-200"
                                        }`}
                                    >
                                        {Math.floor(props.pages / 2) + 1}
                                    </Button>
                                </PaginationItem>
                            </>
                        ) : (
                            <>
                                <PaginationItem>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            props.onJumpToPageAction(
                                                Math.floor(
                                                    props.current_page - 1
                                                )
                                            )
                                        }
                                        className={`${
                                            props.current_page ===
                                                Math.floor(
                                                    props.current_page - 1
                                                ) && "bg-gray-200"
                                        }`}
                                    >
                                        {Math.floor(props.current_page - 1)}
                                    </Button>
                                </PaginationItem>
                                <PaginationItem>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            props.onJumpToPageAction(
                                                Math.floor(props.current_page)
                                            )
                                        }
                                        className={`${
                                            props.current_page ===
                                                Math.floor(
                                                    props.current_page
                                                ) && "bg-gray-200"
                                        }`}
                                    >
                                        {Math.floor(props.current_page)}
                                    </Button>
                                </PaginationItem>
                                <PaginationItem>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            props.onJumpToPageAction(
                                                Math.floor(
                                                    props.current_page + 1
                                                )
                                            )
                                        }
                                        className={`${
                                            props.current_page ===
                                                Math.floor(
                                                    props.current_page + 1
                                                ) && "bg-gray-200"
                                        }`}
                                    >
                                        {Math.floor(props.current_page + 1)}
                                    </Button>
                                </PaginationItem>
                            </>
                        )}
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant={"ghost"}
                                onClick={() =>
                                    props.onJumpToPageAction(props.pages - 1)
                                }
                                className={`${
                                    props.current_page === props.pages - 1 &&
                                    "bg-gray-200"
                                }`}
                            >
                                {props.pages - 1}
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant={"ghost"}
                                onClick={() =>
                                    props.onJumpToPageAction(props.pages)
                                }
                                className={`${
                                    props.current_page === props.pages &&
                                    "bg-gray-200"
                                }`}
                            >
                                {props.pages}
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant={"ghost"}
                                onClick={props.onPaginationNextAction}
                                disabled={props.pages === props.current_page}
                            >
                                Next <ChevronRight />
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                {/* <Button
                        variant="outline"
                        size="sm"
                        onClick={props.onPaginationPrevAction}
                        // onClick={() => table.previousPage()}
                        // disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={props.onPaginationNextAction}
                        // onClick={() => table.nextPage()}
                        // disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button> */}
            </div>
        </div>
    );
}
