import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import DragDropFileUpload from 'Components/DragDropFileUpload';

import styles from './TestDragDropFileUpload.module.scss';

function TestDragDropFileUpload() {
  const [file, setFile] = useState();
  const [openFileBrowser, setOpenFileBrowser] = useState();

  const draggableElement = () => <div className="w-px-400 height-px-400 bgRed">Hello</div>;

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <>
      <DragDropFileUpload
        file={file}
        setFile={setFile}
        openFileBrowser={openFileBrowser}
        setOpenFileBrowser={setOpenFileBrowser}
        draggableElement={draggableElement}
        mainContainerClassName="w-px-400 height-px-400"
        whileDraggingElementClassName={cx(styles.dragIsActive)}
      />
      <button onClick={() => setOpenFileBrowser(true)}>Open</button>
    </>
  );
}

export default TestDragDropFileUpload;
