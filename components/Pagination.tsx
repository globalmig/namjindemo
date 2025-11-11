import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IPaginationProps {
  dataCount: number;
  dataPerPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export default function Pagination({
  dataCount,
  dataPerPage,
  setStartPage,
  currentPage,
}: IPaginationProps) {

  const [pageCount, setPageCount] = useState(Math.ceil(dataCount / dataPerPage));
  const [groupStartPage, setGroupStartPage] = useState(1);
  const [selectPage, setSelectPage] = useState(currentPage);

  useEffect(() => {
    setPageCount(Math.ceil(dataCount / dataPerPage));
  }, [dataCount, dataPerPage]);

  useEffect(() => {
    setSelectPage(currentPage);
  }, [currentPage]);

  const pages = Array.from(
    { length: dataPerPage },
    (_, index) => index + groupStartPage
  ).filter((page) => page <= pageCount);

  const onClickPrevPage = () => {
    setStartPage((prev) => {
      if (prev - dataPerPage <= 0) {
        alert("첫 페이지입니다.");
        return 1;
      } else {
        setGroupStartPage(groupStartPage - dataPerPage);
        return prev - dataPerPage;
      }
    });
  };

  const onClickNextPage = () => {
    setStartPage((prev) => {
      if (prev + dataPerPage > pageCount) {
        alert("마지막 페이지입니다.");
        return prev;
      } else {
        setGroupStartPage(groupStartPage + dataPerPage);
        return prev + dataPerPage;
      }
    });
  };

  const onClickPage = (page: number) => {
    setStartPage(page);
    setSelectPage(page)
  };

  return (
    <div className="pagination display-flex">
      <button onClick={onClickPrevPage} style={{ width: '12px', maxWidth: '15px' }}>
        <Image src="/icons/pagination_prev.png" alt="이"width={100} height={20} style={{ width: '100%', height: 'auto'}}/>
      </button>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onClickPage(page)}
            style={{
              fontWeight: selectPage === page ? "bold" : "normal",
              color: selectPage === page ? "rgb(0, 102, 255)" : "black"
            }}
          >
            <p>{page}</p>
          </button>
        ))}
      </div>
      <button onClick={onClickNextPage} style={{ width: '12px', maxWidth: '15px' }}>
        <Image src="/icons/pagination_next.png" alt="다음"width={100} height={20} style={{ width: '100%', height: 'auto'}}/>
      </button>
    </div>
  );
}
