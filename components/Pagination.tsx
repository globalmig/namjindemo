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
    <div className="display-flex mt-12.5 mx-auto mb-17.5 max-w-175 pc:my-17.5 pc:mb-7.5">
      <button
        onClick={onClickPrevPage}
        className="w-3 max-w-3.75">
        <Image
          src="/icons/pagination_prev.png"
          alt="이전"
          className="cursor-pointer w-full h-auto"
          width={100}
          height={20} />
      </button>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            className={`my-0 mx-2.5 cursor-pointer
                ${selectPage === page ? 'font-bold text-blue' : 'font-normal text-black'}`
            }
            onClick={() => onClickPage(page)}
          >
            <p className="text-[1.2rem]">{page}</p>
          </button>
        ))}
      </div>
      <button onClick={onClickNextPage}
        className="w-3 max-w-3.75">
        <Image
          src="/icons/pagination_next.png"
          alt="다음"
          className="cursor-pointer w-full h-auto"
          width={100}
          height={20} />
      </button>
    </div>
  );
}
