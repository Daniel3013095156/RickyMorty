import React, { useEffect, useState } from "react";
import Resident from "./Resident";
import { paginationLogic } from "../pagination";

const FIRST_PAGE = 1;

const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(FIRST_PAGE);
  }, [location]);

  return (
    <section className="px-3">
      {/* Lista de residentes */}
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6">
        {residentsInPage?.map((resident) => (
          <Resident key={resident} residentUrl={resident} />
        ))}
      </section>

      {/* Paginación */}
      <section className="flex justify-center gap-4 flex-wrap">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`p-2 px-3 rounded-md ${
              currentPage === page ? "bg-red-500" : "bg-green-700"
            }`}
          >
            {page}
          </button>
        ))}
      </section>
    </section>
  );
};

export default ResidentList;
