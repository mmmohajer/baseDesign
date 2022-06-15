import React, { useState } from 'react';

import AdminNav from 'Components/AdminNav';
import AdminNavItem from 'Components/AdminNav/subs/AdminNavItem';

import './TestAdminnav.scss';

const navItems = ['Item1', 'Item2', 'Item3', 'Item4'];

const icons = (item) => {
  if (item === 'Item1') {
    return <div>Icon1</div>;
  } else if (item === 'Item2') {
    return <div>Icon2</div>;
  } else if (item === 'Item3') {
    return <div>Icon3</div>;
  } else if (item === 'Item4') {
    return <div>Icon4</div>;
  }
};

const TestAdminNav = () => {
  const [activeMenu, setActiveMenu] = useState('Item1');
  return (
    <>
      <AdminNav isActive={true}>
        {navItems.map((item, idx) => (
          <AdminNavItem
            key={idx}
            isActive={activeMenu === item}
            onClick={() => setActiveMenu(item)}
            className="mouse-hand">
            <div className="flex flex--ai--center">
              <div>{icons(item)}</div>
              <div>{item}</div>
            </div>
          </AdminNavItem>
        ))}
      </AdminNav>
    </>
  );
};

export default TestAdminNav;
