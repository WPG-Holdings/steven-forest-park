import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import BannerDOM from '@/components/BannerDOM';
import api from '@/api';

export default function Purely() {
  const { useTheme } = useContext(ThemeContext);
  const [detailData, setDetailData] = useState();
  const [fabricData, setFabricData] = useState();

  const getBedDetail = async () => {
    try {
      const data = await api.detail.getBedDetail(192);
      setDetailData(data.data.acf);
    } catch (error) {
      console.log(error);
    }
  };
  const getFabricDetail = async () => {
    try {
      const data = await api.detail.getFabricDetail(316);
      setFabricData(data.data.acf);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBedDetail();
    getFabricDetail();
  }, []);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 床架 - Purely'}
        description={
          '當日常告終，選擇一處來沈睡。此地當有仔細的搖籃曲，不太冷漠，而又不過於甜美的那一種。'
        }
        keywords={
          '家具,精品床,床架,睡眠,雙人床,雙人加大,雙人特大,純粹之後,purely'
        }
      />
      {detailData && (
        <div className="page-purely">
          <BannerDOM detailImg={detailData.banner} />
          <div className="detail-content">
            <ul className="item-area">
              <li className="item-list">
                <p className="item-title">價格</p>
                <span className="item-content">
                  <p>{detailData.tab1.price.price1}</p>
                  <p>{detailData.tab1.price.price2}</p>
                  <p>{detailData.tab1.price.price3}</p>
                  <p style={{ paddingTop: '8px' }}>
                    {detailData.tab1.price.remark}
                  </p>
                </span>
              </li>
              <li className="item-list">
                <p className="item-title">尺寸</p>
                <span className="item-content">
                  <p>{detailData.tab1.size.size1}</p>
                  <p>{detailData.tab1.size.size2}</p>
                  <p>{detailData.tab1.size.size3}</p>
                  <p style={{ paddingTop: '8px' }}>
                    {detailData.tab1.size.remark}
                  </p>
                </span>
              </li>
              <li className="item-list">
                <p className="item-title">材質</p>
                <span className="item-content">{detailData.tab1.material}</span>
              </li>
              <li className="item-list">
                <p className="item-title">備註</p>
                <span className="item-content">
                  <p>{detailData.tab1.remark.remark1}</p>
                  <p>{detailData.tab1.remark.remark2}</p>
                </span>
              </li>
              <li className="item-list">
                <p className="item-title">面料</p>
                <span className="item-content">{detailData.tab1.fabric}</span>
              </li>
            </ul>
          </div>
          {fabricData && (
            <div className="fabric-area g-flex">
              <span className="fabric-item">
                <img
                  className="fabric-img"
                  src={fabricData.fabric1.fabricimg}
                ></img>
                <p>{fabricData.fabric1.fabrictitle}</p>
              </span>
              <span className="fabric-item">
                <img
                  className="fabric-img"
                  src={fabricData.fabric2.fabricimg}
                ></img>
                <p>{fabricData.fabric2.fabrictitle}</p>
              </span>
              <span className="fabric-item">
                <img
                  className="fabric-img"
                  src={fabricData.fabric3.fabricimg}
                ></img>
                <p>{fabricData.fabric3.fabrictitle}</p>
              </span>
              <span className="fabric-item">
                <img
                  className="fabric-img"
                  src={fabricData.fabric4.fabricimg}
                ></img>
                <p>{fabricData.fabric4.fabrictitle}</p>
              </span>
              <span className="fabric-item">
                <img
                  className="fabric-img"
                  src={fabricData.fabric5.fabricimg}
                ></img>
                <p>{fabricData.fabric5.fabrictitle}</p>
              </span>
            </div>
          )}
        </div>
      )}
      <style jsx>{`
        .detail-content {
          padding: 25px 0px 0px 0px;
          width: 90%;
          line-height: 28px;
          .item-list {
            font-size: var(--f-s-16);
            margin-bottom: 25px;
            .item-title {
              font-size: var(--f-s-18);
              font-weight: bold;
              color: var(--cr-text-quarternary);
              margin: 0px 0px 12px 0px;
            }
            p {
              margin: 8px 0px;
            }
          }
        }
        .fabric-area {
          padding: 0px 16px;
          .fabric-item {
            padding: 0px 6px;
            .fabric-img {
              width: 100px;
              height: 100px;
            }
            p {
              text-align: center;
              font-size: var(--f-s-14);
            }
          }
        }
        @media only screen and (min-width: ${useTheme.layout.mediaXSmall}px) {
          .fabric-area {
            padding: 0px 20px;
            .fabric-item {
              padding: 0px 12px;
              .fabric-img {
                width: 120px;
                height: 120px;
              }
              p {
                font-size: var(--f-s-16);
              }
            }
          }
        }
        @media only screen and (min-width: ${useTheme.layout.mediaMedium}px) {
          .detail-content {
            padding: 25px 0px 0px 60px;
            .item-list {
              font-size: var(--f-s-16);
              margin-bottom: 40px;
              .item-title {
                font-size: var(--f-s-18);
              }
            }
          }
          .fabric-area {
            padding: 0px 80px;
          }
        }
      `}</style>
    </>
  );
}
