import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IPaginationProps {
  dataCount: number;
  dataPerPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  dataCount,
  dataPerPage,
  setStartPage,
}: IPaginationProps) {

  const pageCount = Math.ceil(dataCount / dataPerPage);
  const [selectPage, setSelectPage] = useState(1);
  const [groupStartPage, setGroupStartPage] = useState(1);

  const pages = Array.from(
    { length: dataPerPage },
    (_, index) => index + groupStartPage
  ).filter(page => page <= pageCount);

  const onClickPrevPage = () => {
    if (selectPage <= 1) return;

    const newPage = selectPage - 1;
    setSelectPage(newPage);
    setStartPage(newPage);

    if (newPage < groupStartPage) {
      setGroupStartPage(groupStartPage - dataPerPage);
    }
  };

  const onClickNextPage = () => {
    if (selectPage >= pageCount) return;

    const newPage = selectPage + 1;
    setSelectPage(newPage);
    setStartPage(newPage);

    if (newPage >= groupStartPage + dataPerPage) {
      setGroupStartPage(groupStartPage + dataPerPage);
    }
  };

  const onClickPage = (page: number) => {
    setSelectPage(page);
    setStartPage(page);
  };

  return (
    <div className="pagination display-flex">
      <button onClick={onClickPrevPage} style={{ width: '12px', maxWidth: '15px' }}>
        <Image src="/icons/pagination_prev.png" alt="이전" width={100} height={20} style={{ width: '100%', height: 'auto' }} />
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
        <Image src="/icons/pagination_next.png" alt="다음" width={100} height={20} style={{ width: '100%', height: 'auto' }} />
      </button>
    </div>
  );
}
