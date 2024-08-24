import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PaginationState} from "@tanstack/react-table";

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
                >
                    {currentPage > 3 ? currentPage - 2 : 1}
                </Button>
            </PaginationItem>
            <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(currentPage > 3 ? currentPage - 2 : 1)}
                >
                    {currentPage > 3 ? currentPage - 1 : 2}
                </Button>
            </PaginationItem>
            <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(currentPage > 3 ? currentPage - 1 : 2)}
                >
                    {currentPage > 3 ? currentPage : 3}
                </Button>
            </PaginationItem>
            {pageCounts > 3 && currentPage != 5 && <PaginationEllipsis/>}
            {pageCounts > 3 && <PaginationItem>
                <Button variant="link"
                        onClick={() => handler(pageCounts - 1)}
                >
                    {pageCounts}
                </Button>
            </PaginationItem>}
        </>
    }
}