import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import Link from 'next/link';

const BannerDOM = (props) => {
  const { useTheme } = useContext(ThemeContext);
  const { detailImg } = props;

  return (
    <>
      <div className="banner-area">
        <img className="productItem-banner" src={detailImg}></img>
      </div>
      <style jsx>{`
        :global(.container) {
          padding: 0px;
          max-width: 100%;
        }
        .productItem-banner {
          max-width: 100%;
          height: auto;
          padding: 0px;
          clip-path: inset(0.1% 0.1% 0.1% 0.1%);
        }

        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
        }
      `}</style>
    </>
  );
};

export default BannerDOM;
