import { useEffect, useState } from "react";

import "./pagination.scss";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface PaginationProps {
  countriesPerPage: number;
  TotalCount: number;
  onOffsetNext: () => void;
  onOffsetPrev: () => void;
}

export default function Pagination({
  countriesPerPage,
  TotalCount,
  onOffsetNext,
  onOffsetPrev,
}: PaginationProps) {
  const curentPaginate = useTypedSelector((state) => state.curentPaginate);
  const { addcurentPaginate } = useActions();
  const [paginItem, setPaginItem] = useState(0);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalCount / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  function paginationClick(click: number) {
    addcurentPaginate(click || curentPaginate);
    setPaginItem(curentPaginate);
  }

  useEffect(() => {
    setPaginItem(curentPaginate);
  }, [curentPaginate]);

  const maxButtons = 3;

  let startPage = Math.max(1, paginItem - Math.floor(maxButtons / 2));
  let endPage = Math.min(pageNumbers.length, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const lastPage = pageNumbers.length;

  return (
    <div className="tickets__pagination">
      <div className="pagination">
        <ul className="pagination__list">
          <li className=" pagination__prev" onClick={onOffsetPrev}>
            <span className="pagination__link"></span>
          </li>
          {startPage > 1 && (
            <li
              onClick={() => paginationClick(1)}
              className="pagination__item pagination__item-dots"
              key="startDots"
            >
              <span className="pagination__link">1</span>
            </li>
          )}
          {pageNumbers.slice(startPage - 1, endPage).map((num) => (
            <li
              onClick={() => paginationClick(num)}
              className={
                paginItem === num
                  ? "pagination__item pagination__item-active"
                  : "pagination__item"
              }
              key={num}
            >
              <span className="pagination__link">{num}</span>
            </li>
          ))}
          {endPage < pageNumbers.length && (
            <li
              className="pagination__item pagination__item-dots"
              key="endDots"
            >
              <span className="pagination__link">...</span>
            </li>
          )}
          {endPage < pageNumbers.length && (
            <li
              onClick={() => paginationClick(lastPage)}
              className={
                paginItem === lastPage
                  ? "pagination__item pagination__item-active"
                  : "pagination__item"
              }
              key={lastPage}
            >
              <span className="pagination__link">{lastPage}</span>
            </li>
          )}
          <li className=" pagination__next" onClick={onOffsetNext}>
            <span className="pagination__link "></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
