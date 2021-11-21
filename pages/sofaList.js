import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import ProductList from '@/components/ProductList';
import api from '@/api';

export default function SofaList() {
  const { useTheme } = useContext(ThemeContext);
  const [listData, setListData] = useState();

  const getSofaList = async () => {
    try {
      const data = await api.list.getSofaList();
      setListData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSofaList();
  }, []);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 沙發介紹'}
        description={'端坐、伸展、斜躺、後仰、盤腿，我是我自己的文藝復興雕像'}
        keywords={
          '家具,沙發,精品沙發,現代主義,表現派,波普藝術,bauhaus,expressionism,minutiae,structural,facade,pop'
        }
      />
      <div className="page-sofaList">
        <img className="product-banner" src="/about-sofa-banner.jpg"></img>
        <p className="product-slogan g-center">
          端坐、伸展、斜躺、後仰、盤腿，我是我自己的文藝復興雕像
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
