import {useTableColumns} from "@/table/TodoTableColumns.tsx";
import {flexRender, getCoreRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {TTodo} from "@/types/apiResponseType.ts";
import {useState} from "react";
import TodoTablePagination from "@/components/layout/TodoTablePagination.tsx";

type TodoTableProps = {
    data: TTodo[] | undefined;
    completed?: boolean
}

export type PaginationState = {
    pageIndex: number;
    pageSize: number;
}

export default function TodoTable({data, completed}: TodoTableProps) {

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });


    const columns = useTableColumns(completed);

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {pagination},
    })
    return (
        <div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (<TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((column) => (
                            <TableHead key={column.id}>
                                {column.isPlaceholder ? null : flexRender(column.column.columnDef.header, column.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((rowModel) => (
                        <TableRow key={rowModel.id}>
                            {rowModel.getVisibleCells().map((visibleCells) => (
                                <TableCell key={visibleCells.id}>
                                    {flexRender(visibleCells.column.columnDef.cell, visibleCells.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            {
                !data || data!.length === 0 &&
                <h1 className={"py-5 text-center font-semibold"}>You don't have things todo huu yay!!</h1>
            }

            {
                data && data!.length > 0 && <TodoTablePagination pageCounts={table.getPageCount()} pagination={pagination}
                                             setPagination={setPagination}/>
            }

        </div>
    )
}