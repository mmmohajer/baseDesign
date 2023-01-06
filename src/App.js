import React, { useState } from 'react';
import cx from 'classnames';

import TestNavBar from 'TestComponents/TestNavBar';
import TestIcon from 'TestComponents/TestIcon';
import TestAlert from 'TestComponents/TestAlert';
import TestModal from 'TestComponents/TestModal';
import AdminNav from 'TestComponents/TestAdminNav';
import TestAdminNav from 'TestComponents/TestAdminNav';
import TestDiv from 'TestComponents/TestDiv';
import TestCard from 'TestComponents/TestCard';
import TestTable from 'TestComponents/TestTable';
import TestHeading from 'TestComponents/TestHeading';
import TestImage from 'TestComponents/TestImage';
import TestParagraph from 'TestComponents/TestParagraph';
import TestText from 'TestComponents/TestText';
import TestButton from 'TestComponents/TestButton';
import TestForm from 'TestComponents/TestForm';
import TestRow from 'TestComponents/TestRow';
import TestSearch from 'TestComponents/TestSearch';
import TestSwipableSlider from 'TestComponents/TestSwipableSlider';
import TestSelect from 'TestComponents/TestSelect';
import TestActivableElement from 'TestComponents/TestActivableElement';
import TestPagination from 'TestComponents/TestPagination';
import TestLimitedSwipableSlider from 'TestComponents/TestLimitedSwipableSlider';
import TestScroll from 'TestComponents/TestScroll';
import TestDragDropFileUpload from './TestComponents/TestDragDropFileUpload';
import TestTriangle from './TestComponents/TestTriangle';
import TestRing from './TestComponents/TestRing';

const Home = () => {
  return (
    <div className="container">
      {/* <TestNavBar /> */}
      {/* <div className="w-px-400 ml-auto mr-auto">
        <TestLimitedSwipableSlider />
      </div>
      <div className="w-px-400 ml-auto mr-auto">
        <TestSwipableSlider />
      </div>
      <TestTable /> */}
      {/* <div className="w-per-100 height-px-200 bgYellow"></div>
      <TestScroll /> */}
      {/* <TestDragDropFileUpload /> */}
      {/* <TestTable /> */}
      {/* <TestTriangle /> */}
      <div className="p2">
        <TestRing />
        <div className="mouse-hand">Hello</div>
      </div>
    </div>
  );
};

export default Home;
