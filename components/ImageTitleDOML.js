import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';

const ImageTitleDOML = (props) => {
  const { useTheme } = useContext(ThemeContext);
  const { sloganTitle, sloganImg } = props;

  return (
    <>
      <div className="sloganImg-area">
        <img className="slogan-image" src={sloganImg}></img>
        <span className="title-area g-flex g-center">
          <p>{sloganTitle}</p>
        </span>
      </div>
      <style jsx>{`
        .sloganImg-area {
          position: relative;
          display: flex;
          margin: 40px 0px;
          .slogan-image {
            position: relative;
            width: 60vw;
            height: 35vw;
            left: 32%;
          }
          .title-area {
            position: absolute;
            top: 30%;
            left: 10%;
            background-color: rgba(248, 249, 2550, 0.8);
            width: 200px;
            height: 60px;
            justify-content: center;
            text-align: center;
            font-size: var(--f-s-14);
            padding: 0px 10px;
            line-height: 20px;
            box-shadow: 0 0 10px 10px rgba(248, 249, 2550, 0.5);
          }
        }
        @media only screen and (min-width: 550px) {
          .sloganImg-area {
            .title-area {
              position: absolute;
              top: 35%;
              left: 12%;
              width: 240px;
              height: 80px;
            }
          }
        }
        @media only screen and (min-width: ${useTheme.layout.mediaXSmall}px) {
          .sloganImg-area {
            .slogan-image {
              position: relative;
              width: 60vw;
              height: 33.75vw;
              left: 28%;
            }
            .title-area {
              position: absolute;
              top: 30%;
              left: 12%;
              background-color: rgba(248, 249, 2550, 0.9);
              width: 320px;
              height: 140px;
              justify-content: center;
              text-align: center;
              font-size: var(--f-s-22);
              padding: 0px 24px;
              line-height: 50px;
            }
          }
        }
        @media only screen and (min-width: ${useTheme.layout.mediaMedium}px) {
          .sloganImg-area {
            .slogan-image {
              position: relative;
              width: 60vw;
              height: 33.75vw;
              left: 30%;
            }
            .title-area {
              position: absolute;
              top: 35%;
              left: 15%;
              background-color: rgba(248, 249, 2550, 0.9);
              width: 400px;
              height: 180px;
              justify-content: center;
              text-align: center;
              font-size: var(--f-s-24);
            }
          }
        }
      `}</style>
    </>
  );
};

export default ImageTitleDOML;
