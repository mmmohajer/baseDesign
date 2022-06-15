import React, { useState } from 'react';

import Pagination from 'Components/Pagination';
import './TestPagination.scss';

const TestPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        numberOfShownPages={5}
        currentPage={currentPage}
        numberOfTotalPages={25}
        setCurrentPage={setCurrentPage}
        showFirstLastIcon={true}
      />
    </>
  );
};

export default TestPagination;
