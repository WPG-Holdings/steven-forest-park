import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import Link from 'next/link';

const ProductDetail = (props) => {
  const { useTheme } = useContext(ThemeContext);
  const { linkUrl, sloganTitle, listImg, itemTitle } = props;

  return (
    <>
      <div className="product-area">
        <img className="productItem-banner" src={listImg}></img>
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
        }

        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
        }
      `}</style>
    </>
  );
};

export default ProductDetail;
