import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from './TestNavBar.module.scss';

import Icon from 'Components/Icon';
import NavBar from 'Components/NavBar';
import NavItem from 'Components/NavBar/subs/NavItem';
import SubNavContainer from 'Components/NavBar/subs/SubNavContainer';
import SubNavItem from 'Components/NavBar/subs/SubNavItem';

const DesktopNav = ({
  activeMenu,
  setActiveMenu,
  activeSubMenues,
  menuClickHandler,
  MENUES,
  SUB_MENUES
}) => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <>
      <NavBar
        className={cx(
          'pos-rel w-per-100 flex flex--jc--between flex--ai--center pl2 pr2 pt1 pb1 br-bottom-solid-1 br-color-inverse bgInverse'
        )}>
        <div className="flex flex--jc--start flex--ai--center">
          <div className="w-px-200 height-px-50 bgSilver flex flex--jc--center flex--ai--center">
            Logo 200x50
          </div>
          <div className="flex">
            {MENUES.map((menu, idx1) => (
              <NavItem
                className={cx(
                  'mx1 px1 flex flex--ai--center textWhite br-rad-px-10 height-px-40 br-color-primary'
                )}
                onClick={() => menuClickHandler(menu)}
                isActive={activeMenu === menu}
                key={idx1}>
                <div className="mouse-hand">{menu}</div>
                {menu in SUB_MENUES && (
                  <SubNavContainer
                    className={cx(
                      'bgInverse w-px-200 flex flex--jc--center flex--dir--col flex--ai--center br-rad-px-10'
                    )}
                    onClick={() => setActiveMenu(menu)}
                    isActive={activeSubMenues.includes(menu)}>
                    {SUB_MENUES[menu].map((subMenu, idx2) => (
                      <SubNavItem
                        className={cx(
                          'br-rad-px-10 textWhite p1 w-per-100 flex flex--jc--center flex--ai--center mouse-hand'
                        )}
                        key={idx2}>
                        {subMenu}
                      </SubNavItem>
                    ))}
                  </SubNavContainer>
                )}
              </NavItem>
            ))}
          </div>
        </div>

        <div className="flex flex--jc--center flex--ai--center">
          <div
            className={cx(
              'mr2 min-height-px-30 min-w-px-30 br-rad-px-50 bgWhite flex flex--jc--center flex--ai--center',
              styles.search
            )}>
            <Icon
              onClick={() => setActiveSearch(!activeSearch)}
              type="search"
              scale={0.8}
              fill="gray"
              stroke="gray"
              className="mouse-hand"
            />
            <input
              type="search"
              className={cx(
                'br-rad-px-10 fs-px-18',
                styles.searchInput,
                activeSearch && 'pl1 pr1',
                activeSearch && styles.searchInput_active
              )}
            />
          </div>
          <button
            className={cx(
              'show-flex-in-md-lg bgPrimary fs-px-16 br-hidden-1 br-color-primary btn-small mouse-hand br-rad-px-10 height-px-40 flex flex--ai--center flex--jc--center px2',
              styles.logRegBtn
            )}>
            Login/Register
          </button>
        </div>
      </NavBar>
    </>
  );
};

export default DesktopNav;
