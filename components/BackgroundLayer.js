import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

function BackgroundLayer(props) {
  const { isShow, bgColor } = props;

  return (
    <>
      <div
        className={clsx('bg-layout', {
          show: isShow,
        })}
      />

      <style jsx>{`
        .bg-layout {
          height: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          background: ${bgColor};
          transition: opacity 1s ease;
          z-index: 102;
          &.show {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </>
  );
}

export default BackgroundLayer;
