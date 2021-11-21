import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import ProductList from '@/components/ProductList';
import api from '@/api';

export default function ChairList() {
  const { useTheme } = useContext(ThemeContext);
  const [listData, setListData] = useState();

  const getChairList = async () => {
    try {
      const data = await api.list.getChairList();
      setListData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChairList();
  }, []);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 單椅介紹'}
        description={'當代喧嘩，只剩貴族才真的懂如何享受獨處時的老式摩登'}
        keywords={'家具,單椅,精品椅,unControllability,reality'}
      />
      <div className="page-chairList">
        <img className="product-banner" src="/about-chair-banner.jpg"></img>
        <p className="product-slogan g-center">
          當代喧嘩，只剩貴族才真的懂如何享受獨處時的老式摩登
        </p>
        {listData &&
          listData.map((item, index) => (
            <ProductList
              key={index}
              data={item}
              linkUrl={`detail/${item.acf.titleName}`}
              listImg={item.acf.imgUrl}
            />
          ))}
      </div>
      <style jsx>{`
        .product-banner {
          max-width: 100%;
          height: auto;
          padding: 0px;
        }
        .product-slogan {
          font-size: var(--f-s-18);
          font-weight: bold;
          color: var(--cr-text-quarternary);
          text-align: center;
          line-height: 28px;
          margin: 40px 20px;
        }
        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
          .product-slogan {
            font-size: var(--f-s-32);
          }
        }
      `}</style>
    </>
  );
}
