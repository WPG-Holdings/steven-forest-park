import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';
import Link from 'next/link';

const ProductList = (props) => {
  const { useTheme } = useContext(ThemeContext);
  const { linkUrl, sloganTitle, listImg } = props;

  return (
    <>
      <div className="product-area">
        <Link href={linkUrl}>
          <a>
            <div className="item-area">
              <img className="item-image" src={listImg}></img>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        :global(.container) {
          padding: 0px;
          max-width: 100%;
        }
        .product-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          .item-area {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 40px;
            .item-image {
              max-width: 85%;
              height: auto;
              padding: 0px;
              clip-path: inset(0.2% 0.2% 0.2% 0.2%);
            }
            .item-title {
              font-size: var(--f-s-18);
              font-weight: bold;
              color: var(--cr-text-quarternary);
              text-align: center;
            }
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
          .product-area {
            .item-area {
              .item-image {
                max-width: 75%;
              }
              .item-title {
                font-size: var(--f-s-32);
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default ProductList;
