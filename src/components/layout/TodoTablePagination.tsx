import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PaginationState} from "@tanstack/react-table";
import {cn} from "@/lib/utils.ts";

type TodoTablePaginationProps = {
    pageCounts: number;
    pagination: PaginationState;
    setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
}
export default function TodoTablePagination({pageCounts, pagination, setPagination}: TodoTablePaginationProps) {
    const goToPage = (page: number) => {
        setPagination(prev => ({
            ...prev,
            pageIndex: page,
        }))
    }
    const paginationItems = getPaginationItems(pageCounts, pagination.pageIndex, goToPage)
    return (
        <Pagination className={"mt-4"}>
            <PaginationContent>
                <PaginationItem>
                    <Button variant="link"
                            onClick={() => goToPage(pagination.pageIndex - 1)}
                            disabled={pagination.pageIndex < 1}
                    >
                        <PaginationPrevious/>
                    </Button>
                </PaginationItem>
                {paginationItems}
                <PaginationItem>
                    <Button variant="link"
                            disabled={pagination.pageIndex == pageCounts - 1}
                            onClick={() => goToPage(pagination.pageIndex + 1)}
                    >
                        <PaginationNext/>
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

const getPaginationItems = (pageCounts: number, currentPage: number, handler: (page: number) => void) => {
    if (pageCounts > 5) {
        return <>
            <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(currentPage > 3 ? currentPage - 3 : 0)}
                        className={cn((currentPage === 0) && "bg-stone-500 text-white")}

                >
                    {currentPage > 2 ? currentPage - 1 : 1}
                </Button>
            </PaginationItem>
            <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(currentPage > 3 ? currentPage - 2 : 1)}
                        className={cn((currentPage === 1) && "bg-stone-500 text-white")}
                >
                    {currentPage > 2 ? currentPage : 2}
                </Button>
            </PaginationItem>
            <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(currentPage > 3 ? currentPage - 1 : 2)}
                        className={cn((currentPage > 1) && "bg-stone-500 text-white")}
                >
                    {currentPage > 2 ? currentPage + 1 : 3}
                </Button>
            </PaginationItem>
            {pageCounts > 3 && currentPage < 4 && <PaginationEllipsis/>}
            {pageCounts > 3 && currentPage != 5 && <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(pageCounts - 1)}
                >
                    {pageCounts}
                </Button>
            </PaginationItem>}
        </>
    } else {
        const arr = new Array(pageCounts).fill(0);
        return (
            arr.map((_, idx) => <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(idx + 1)}
                        className={cn((currentPage === idx) && "bg-stone-500 text-white")}

                >
                    {idx + 1}
                </Button>
            </PaginationItem>)
        )
    }
}