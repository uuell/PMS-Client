import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";

import "./pagination.css";

export default function Pagination({ setCurrentPage, currentPage }) {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(()=> {
    async function fetchParkingTotalPages() {
      try {
        // Adjust the actual API endpoint and request parameters based on your backend
        const response = await fetch("http://localhost:4000/api/parking", {
          method: "GET",
        });
        const totalPages = await response.json();
        // console.log(totalPages);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchParkingTotalPages();

  }, [])


  const generatePaginationNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 3;

    for (
      let i = currentPage;
      i <= Math.min(currentPage + maxDisplayedPages - 1, totalPages);
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      console.log(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      console.log(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="PMS__pagination">
      <button
        onClick={handlePrevClick} 
        disabled={currentPage === 1}
      >
        <img src={arrowLeft} className="arrow-left" alt="arrow-left"></img>
      </button>
      <div className="page-numbers">
        {generatePaginationNumbers().map((pageNumber) => (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          ))}
      </div>
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <img src={arrowRight} className="arrow-right" alt="arrow-right"></img>
      </button>
    </div>
  );
}
