import { useState } from "react";

import "./pagination.scss";

interface PaginationProps {
  countriesPage: number;
  TotalCount: number;
}

export default function Pagination({
  countriesPage,
  TotalCount,
}: PaginationProps) {
  const [paginItem, setPaginItem] = useState(0);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalCount / countriesPage); i++) {
    pageNumbers.push(i);
  }

  function paginationClick(click: number) {
    setPaginItem(click);
  }

  return (
    <div className="tickets__pagination">
      <div className="pagination">
        <ul className="pagination__list">
          <li className=" pagination__prev">
            <a className="pagination__link" href="#"></a>
          </li>
          {pageNumbers.map((num) => (
            <li
              onClick={() => paginationClick(num)}
              className={
                paginItem === num
                  ? "pagination__item pagination__item-active"
                  : "pagination__item"
              }
              key={num}
            >
              <a className="pagination__link" href="#">
                {num}
              </a>
            </li>
          ))}
          <li className=" pagination__next">
            <a className="pagination__link " href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
