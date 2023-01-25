import {
  Box,
  Button,
  Dots,
  PageItem,
  PageList,
  Wrapper,
} from '@/components/Pagination/styles';

interface PaginationProps {
  next?: number;
  pages?: number;
  prev?: number;
  handlePageClick: (pageId: number) => void;
}

export const Pagination = ({
  next,
  pages,
  prev,
  handlePageClick,
}: PaginationProps) => {
  const currentPage = prev ? prev + 1 : 1;
  const minPageLimit = currentPage - 4;
  const maxPageLimit = currentPage + 3;
  const pagesArr = Array.from({ length: pages || 0 }, (_, i) => i + 1);
  const allPages = pagesArr.filter(
    (page) => page <= maxPageLimit && page > minPageLimit
  );
  const showEndDots = currentPage <= (pages || 0) - 4;
  const showStartDots = currentPage >= 5;

  const handlePrevButtonClick = () => {
    if (!prev) return;
    handlePageClick(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    if (!next) return;
    handlePageClick(currentPage + 1);
  };

  return (
    <Wrapper>
      <Box>
        <Button onClick={handlePrevButtonClick} disabled={!prev}>
          {'<'}
        </Button>
        <PageList>
          {showStartDots && (
            <>
              <PageItem onClick={() => handlePageClick(1)}>1</PageItem>
              <Dots>...</Dots>
            </>
          )}
          {allPages.map((page) => (
            <PageItem
              key={page}
              isActive={currentPage === page}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PageItem>
          ))}
          {showEndDots && (
            <>
              <Dots>...</Dots>
              <PageItem onClick={() => handlePageClick(pages || 0)}>
                {pages}
              </PageItem>
            </>
          )}
        </PageList>
        <Button onClick={handleNextButtonClick} disabled={!next}>
          {'>'}
        </Button>
      </Box>
    </Wrapper>
  );
};
