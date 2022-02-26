import React, { useState } from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

const cssConfig = {
  hamburgerMenuBgColor: "blue",
};

import Header from "Components/Header";
import TestNavBar from "TestComponents/TestNavBar";
import Icon from "Components/Icon";
import Carousel from "Components/Carousel";

const arrayOfIcons = [
  "search",
  "up",
  "down",
  "left",
  "right",
  "dash",
  "image",
  "fimage",
  "mic",
  "fmic",
  "notification",
  "fnotification",
  "setting",
  "fsetting",
  "x",
  "video",
  "fvideo",
  "share",
  "fshare",
  "plus",
];

const Home = () => {
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(1);
  return (
    <div className="container">
      <TestNavBar />
      <div className="flex flex--jc--center p2 flex--ai--center w-per-100 flex--wrap bgYellow">
        {arrayOfIcons.map((icon, idx) => (
          <div className="ml2 mr2" key={idx}>
            <Icon
              type={icon}
              scale={1.2}
              fill="dodgerblue"
              stroke="dodgerblue"
            />
          </div>
        ))}
      </div>
      <div className="w-px-400 ml-auto mr-auto">
        <Carousel
          moveRight={moveRight}
          setMoveRight={setMoveRight}
          moveLeft={moveLeft}
          setMoveLeft={setMoveLeft}
          moveToItemWithNum={moveToItemWithNum}
          setMoveToItemWithNum={setMoveToItemWithNum}
          transitionDuration={0.25}
          transition_timing_function="ease-in"
        >
          <div className="w-per-100 flex flex--jc--between flex--ai--center">
            <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 1
            </p>
            <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 2
            </p>
          </div>

          <div className="w-per-100 flex flex--jc--between flex--ai--center">
            <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 3
            </p>
            <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 4
            </p>
          </div>

          <div className="w-per-100 flex flex--jc--between flex--ai--center">
            <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 5
            </p>
            <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 6
            </p>
          </div>

          <div className="w-per-100 flex flex--jc--between flex--ai--center">
            <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 7
            </p>
            <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 8
            </p>
          </div>

          <div className="w-per-100 flex flex--jc--between flex--ai--center">
            <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 9
            </p>
            <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 10
            </p>
          </div>

          <div className="w-per-100 flex flex--jc--between flex--ai--center">
            <p className="bgSilver textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 11
            </p>
            <p className="bgPrimary textRed w-per-50 flex flex--jc--center flex--ai--center height-px-100">
              Item 12
            </p>
          </div>
        </Carousel>
        <button onClick={() => setMoveRight(true)}>Right</button>
        <button onClick={() => setMoveLeft(true)}>Left</button>
        <button onClick={() => setMoveToItemWithNum(4)}>
          Jump To number 4
        </button>
        <button onClick={() => setMoveToItemWithNum(1)}>
          Jump To Number 1
        </button>
      </div>
    </div>
  );
};

export default Home;
