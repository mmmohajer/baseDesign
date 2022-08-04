import React, { useState } from 'react';
import cx from 'classnames';

import TestNavBar from 'TestComponents/TestNavBar';
import TestCaraousel from 'TestComponents/TestCaraousel';
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
import TestDraggableSlider from 'TestComponents/TestDraggableSlider';
import TestSelect from 'TestComponents/TestSelect';
import TestActivableElement from 'TestComponents/TestActivableElement';
import TestPagination from 'TestComponents/TestPagination';

const Home = () => {
  return (
    <div className="container">
      <TestNavBar />
      {/* <TestAdminNav /> */}
      {/* <TestModal /> */}
      <div>
        <TestText />
      </div>
      <div className="flex flex--jc--center p2 flex--ai--center w-per-100 flex--wrap bgYellow">
        <TestIcon />
      </div>
      <div className="flex flex--jc--center my2">
        <TestImage />
      </div>
      <TestParagraph />
      <div className="w-px-400 ml-auto mr-auto">
        <TestCaraousel />
      </div>
      {/* <TestAlert />
      <TestModal /> */}
      {/* <TestAdminNav /> */}
      <TestDiv />
      <div className="ml3">
        <TestHeading />
      </div>
      <TestCard />
      <img
        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-woman-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png"
        width={30}
      />
      <div className="p1">
        <TestTable />
      </div>
      <div className="height-px-200 w-per-100 bgPrimary"></div>
      {/* <TestPagination /> */}
      <div className="text-justify w-px-400 flex flex--jc--center flex--ai--center ml-auto mr-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className="w-per-100 p1 bgRed">
        <TestButton />
      </div>
      <div className="w-per-100 p1 my1">
        <TestForm />
      </div>
      <TestRow />
      <div className="m2 bgPurple p2">
        <TestSearch />
      </div>
      <div className="w-px-400 ml-auto mr-auto">
        <TestDraggableSlider />
      </div>
      <div className="w-px-400 ml-auto mr-auto">
        <TestSelect />
      </div>
      <div className="w-px-400 ml-auto mr-auto">
        <TestActivableElement />
      </div>
    </div>
  );
};

export default Home;
