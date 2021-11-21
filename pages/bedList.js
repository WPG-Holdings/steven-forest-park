import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import ProductList from '@/components/ProductList';
import api from '@/api';

export default function BedList() {
  const { useTheme } = useContext(ThemeContext);
  const [listData, setListData] = useState();

  const getBedList = async () => {
    try {
      const data = await api.list.getBedList();
      setListData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBedList();
  }, []);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 床架介紹'}
        description={'好的睡姿是行為藝術，並不容易司空見慣'}
        keywords={
          '家具,床架,精品床,睡眠,雙人床,雙人加大,雙人特大,stillness,sleepism,purely,sense'
        }
      />
      <div className="page-bedList">
        <img className="product-banner" src="/about-bed-banner.jpg"></img>
        <p className="product-slogan g-center">
          好的睡姿是行為藝術，並不容易司空見慣
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
