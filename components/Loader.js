import React from 'react';

function Loader(props) {
  const { size } = props;
  return (
    <>
      <div className="container">
        <div className="loader"></div>
      </div>
      <style jsx>{`
        .loader {
          animation: spin 1s linear infinite;
          border: 3px solid #ddd;
          border-top: 3px solid #42a5f5;
          border-radius: 50%;
          height: ${size}px;
          width: ${size}px;
        }

        @-webkit-keyframes spin {
          to {
            border-top-color: #ec407a;
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes spin {
          to {
            border-top-color: #ec407a;
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        .container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default Loader;
