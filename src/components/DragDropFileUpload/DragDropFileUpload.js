import React, { useRef, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import defaultPropsMap from 'Constants/defaultProps';
const { defaultProps, defaultPropTypes } = defaultPropsMap;

function DragDropFileUpload({
  setFile,
  openFileBrowser,
  setOpenFileBrowser,
  draggableElement,
  whileDraggingElement,
  multipleFileUploader,
  whileDraggingElementClassName,
  mainContainerClassName,
  acceptableFileType,
  inputId
}) {
  const inputRef = useRef();

  const [dragActive, setDragActive] = React.useState(false);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files);
    }
  };

  useEffect(() => {
    if (openFileBrowser) {
      inputRef.current.click();
      setTimeout(() => {
        setOpenFileBrowser(false);
      }, 500);
    }
  }, [openFileBrowser]);

  return (
    <>
      <div
        className={cx('pos-rel', mainContainerClassName)}
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="file"
          className="no-display"
          accept={acceptableFileType}
          multiple={multipleFileUploader}
          onChange={handleChange}
          id={inputId}
        />
        {draggableElement && draggableElement()}
        {dragActive && (
          <div
            className={cx(whileDraggingElementClassName)}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}>
            {whileDraggingElement && whileDraggingElement()}
          </div>
        )}
      </div>
    </>
  );
}

DragDropFileUpload.propTypes = {
  ...defaultPropTypes,
  setFile: PropTypes.func,
  openFileBrowser: PropTypes.bool,
  setOpenFileBrowser: PropTypes.func,
  draggableElement: PropTypes.func,
  whileDraggingElement: PropTypes.func,
  multipleFileUploader: PropTypes.bool,
  whileDraggingElementClassName: PropTypes.string,
  mainContainerClassName: PropTypes.string,
  acceptableFileType: PropTypes.string,
  inputId: PropTypes.string
};

DragDropFileUpload.defaultProps = {
  ...defaultProps,
  openFileBrowser: false,
  acceptableFileType: '.jpg,.jpeg,.png',
  inputId: 'draggableFileUploaderId'
};

export default DragDropFileUpload;
