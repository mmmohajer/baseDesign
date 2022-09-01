import React, { useState } from 'react';

import Scroll from 'Components/Scroll';

const SCROLLABLE_ELEMENT_ID = 'scrollContainerId';
const SCROLLABLE_CONTENT_ID = 'scrollContentId';

function TestScroll() {
  const [scrollPercentage, setScrollPercentage] = useState();

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
          className="w-px-200 height-px-200 ml-auto mr-auto test of-x-hidden of-y-hidden"
          id={SCROLLABLE_ELEMENT_ID}>
          <div className="w-px-500 p1 height-px-200 bgGreen" id={SCROLLABLE_CONTENT_ID}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </Scroll>
    </>
  );
}

export default TestScroll;
