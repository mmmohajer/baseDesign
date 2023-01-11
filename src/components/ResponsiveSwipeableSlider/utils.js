export const handleDragStart = (e, setXStart) => {
  setXStart(e.clientX);
};

export const handleDragEnd = (e, setXEnd) => {
  setXEnd(e.clientX);
};

export const handleDrag = (xStart, xEnd, minXDifferenceToMove, setShowLeft, setShowRight) => {
  if (xEnd > -100000) {
    if (xEnd - xStart >= minXDifferenceToMove) {
      setShowLeft(true);
    }
    if (xEnd - xStart <= -minXDifferenceToMove) {
      setShowRight(true);
    }
  }
};

export const rightSideSubstituteElementsInList = (lst, idx = 0) => {
  return [lst[idx], ...lst.slice(idx + 1), ...lst.slice(0, idx)];
};

export const leftSideSubstituteElementsInList = (lst, idx = 0) => {
  return [...lst.slice(idx + 1), ...lst.slice(0, idx), lst[idx]];
};

export const getArrayOfChildern = (arrayOfChildrenRefs, setArrayOfChildren) => {
  if (arrayOfChildrenRefs?.current?.length) {
    let localArrayOfElements = [];
    arrayOfChildrenRefs.current.forEach((item) => {
      localArrayOfElements.push(item);
    });
    setArrayOfChildren(localArrayOfElements);
  }
};

export const calculateArrayOfWidths = (arrayOfChildren, setTotalWidth, setArrayOfWidths) => {
  if (arrayOfChildren?.length) {
    let curTotalWidth = 0;
    const localArrayOfWidths = [];
    arrayOfChildren.forEach((item) => {
      curTotalWidth += item?.clientWidth;
      localArrayOfWidths.push(item?.clientWidth);
    });
    setTotalWidth(curTotalWidth);
    setArrayOfWidths(localArrayOfWidths);
  }
};

export const showRightHandler = (
  rightSideActiveIndices,
  setRightSideActiveIndices,
  setShowRight,
  arrayOfWidths,
  containerRef,
  setContainerTranslateX,
  transitionDuration,
  containerTranslateX,
  occupiedEachSidInPx
) => {
  let toalWidthsDisplayingElements = occupiedEachSidInPx;
  let count = 0;
  const midIndex = rightSideActiveIndices?.length - 1;
  while (
    count < rightSideActiveIndices?.length &&
    toalWidthsDisplayingElements <= containerRef.current.clientWidth
  ) {
    toalWidthsDisplayingElements += arrayOfWidths[midIndex + count];
    count += 1;
  }
  if (toalWidthsDisplayingElements > containerRef.current.clientWidth) {
    const newTranslateX =
      toalWidthsDisplayingElements - arrayOfWidths[midIndex + count - 1] - occupiedEachSidInPx;
    const newRightSide = rightSideSubstituteElementsInList([...rightSideActiveIndices], count - 1);
    const newLeftSide = leftSideSubstituteElementsInList([...newRightSide]);
    const newActiveIndices = buildActiveIndices([...newLeftSide], [...newRightSide]);
    const rightSideKeys = Object.keys(newActiveIndices).filter((key) => key >= midIndex);
    const rightSideArr = [];
    rightSideKeys.forEach((key) => {
      rightSideArr.push(newActiveIndices[key]);
    });
    setContainerTranslateX(containerTranslateX - newTranslateX);
    setTimeout(() => {
      setRightSideActiveIndices([...rightSideArr]);
    }, [transitionDuration * 1000]);
  }
  setShowRight(false);
};

export const showLeftHandler = (
  leftSideActiveIndices,
  setRightSideActiveIndices,
  setShowLeft,
  arrayOfWidths,
  containerRef,
  setContainerTranslateX,
  transitionDuration,
  containerTranslateX,
  occupiedEachSidInPx
) => {
  let toalWidthsDisplayingElements = occupiedEachSidInPx;
  const midIndex = leftSideActiveIndices?.length - 1;
  let count = midIndex;
  while (count >= 0 && toalWidthsDisplayingElements <= containerRef.current.clientWidth) {
    toalWidthsDisplayingElements += arrayOfWidths[count];
    count -= 1;
  }
  if (toalWidthsDisplayingElements > containerRef.current.clientWidth) {
    const newTranslateX =
      toalWidthsDisplayingElements - arrayOfWidths[count + 2] - occupiedEachSidInPx;
    const newLeftSide = leftSideSubstituteElementsInList([...leftSideActiveIndices], count + 1);
    const newRightSide = rightSideSubstituteElementsInList([...newLeftSide], midIndex);
    const newActiveIndices = buildActiveIndices([...newLeftSide], [...newRightSide]);
    const rightSideKeys = Object.keys(newActiveIndices).filter((key) => key >= midIndex);
    const rightSideArr = [];
    rightSideKeys.forEach((key) => {
      rightSideArr.push(newActiveIndices[key]);
    });
    setContainerTranslateX(containerTranslateX + newTranslateX);
    setTimeout(() => {
      setRightSideActiveIndices([...rightSideArr]);
    }, [transitionDuration * 1000]);
  }
  setShowLeft(false);
};

export const buildActiveIndices = (leftSideArr, rightSideArr) => {
  if (leftSideArr?.length && rightSideArr?.length) {
    const localActiveIndices = {};
    let key = 0;
    leftSideArr?.forEach((item) => {
      localActiveIndices[key] = item;
      key += 1;
    });
    rightSideArr.slice(1)?.forEach((item) => {
      localActiveIndices[key] = item;
      key += 1;
    });
    return localActiveIndices;
  }
};

export const handleSubstitution = (
  activeIndices,
  setHasNoTransition,
  setContainerTranslateX,
  totalWidth,
  arrayOfWidths,
  occupiedEachSidInPx
) => {
  const midIndex = (Object.keys(activeIndices)?.length + 1) / 2 - 1;
  setHasNoTransition(true);
  setContainerTranslateX(-totalWidth / 2 + arrayOfWidths[midIndex] / 2 + occupiedEachSidInPx);
};
