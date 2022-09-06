import React from 'react';

import Scroll from 'Components/Scroll';

const SCROLLABLE_ELEMENT_ID = 'scrollContainerId';
const SCROLLABLE_CONTENT_ID = 'scrollContentId';

function TestScroll() {
  return (
    <>
      <Scroll
        containerClassName="w-px-200 height-px-200 ml-auto mr-auto pos-rel"
        scrollContainerClassName="height-px-20 bgRed ml-auto mr-auto of-x-hidden of-y-hidden"
        scrollClassName="bgBlue w-px-100 height-px-20 bgBlue pos-abs pos-abs--lb"
        scrollableElementId={SCROLLABLE_ELEMENT_ID}
        scrollableContentId={SCROLLABLE_CONTENT_ID}
        scrollAxis="x">
        <div
          className="w-px-200 bgSilver height-px-200 example of-x-auto of-y-auto"
          id={SCROLLABLE_ELEMENT_ID}>
          <div className="w-px-400 height-px-400 bgGreen textWhite" id={SCROLLABLE_CONTENT_ID}>
            Hello
          </div>
        </div>
      </Scroll>
    </>
  );
}

export default TestScroll;
