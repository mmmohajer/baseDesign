import React from 'react';

import Scroll from 'Components/Scroll';

const SCROLLABLE_ELEMENT_ID = 'scrollContainerId';
const SCROLLABLE_CONTENT_ID = 'scrollContentId';
const SCROLLABLE_ELEMENT_ID2 = 'scrollContainerId2';
const SCROLLABLE_CONTENT_ID2 = 'scrollContentId2';

function TestScroll() {
  return (
    <>
      <Scroll
        containerClassName="height-px-40 w-px-200 ml-auto mr-auto pos-rel"
        scrollContainerClassName="height-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden"
        scrollClassName="bgBlue height-px-20 bgBlue pos-abs pos-abs--lb"
        scrollableElementId={SCROLLABLE_ELEMENT_ID}
        scrollableContentId={SCROLLABLE_CONTENT_ID}
        scrollAxis="x">
        <div className="bgSilver of-x-auto of-y-auto" id={SCROLLABLE_ELEMENT_ID}>
          <div className="w-px-400 height-px-40 bgGreen textWhite" id={SCROLLABLE_CONTENT_ID}>
            Hello
          </div>
        </div>
      </Scroll>
      <div className="width-per-100 flex flex--jc--center flex--ai--center bgBlack height-px-20 my3 textWhite">
        Separator
      </div>
      <Scroll
        containerClassName="flex height-px-200 w-px-400 ml-auto mr-auto pos-rel"
        scrollContainerClassName="height-px-200 w-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden"
        scrollClassName="bgBlue w-px-20 bgBlue pos-abs pos-abs--rt"
        scrollableElementId={SCROLLABLE_ELEMENT_ID2}
        scrollableContentId={SCROLLABLE_CONTENT_ID2}
        scrollAxis="y">
        <div className="bgSilver height-px-200 of-x-auto of-y-auto" id={SCROLLABLE_ELEMENT_ID2}>
          <div className="w-px-400 height-px-400 bgGreen textWhite" id={SCROLLABLE_CONTENT_ID2}>
            Hello
          </div>
        </div>
      </Scroll>
    </>
  );
}

export default TestScroll;
