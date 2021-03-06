import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import BannerDOM from '@/components/BannerDOM';
import api from '@/api';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Facade() {
  const { useTheme } = useContext(ThemeContext);
  const [detailData, setDetailData] = useState();
  const [fabricData, setFabricData] = useState();

  const getSofaDetail = async () => {
    try {
      const data = await api.detail.getSofaDetail(170);
      setDetailData(data.data.acf);
    } catch (error) {
      console.log(error);
    }
  };
  const getFabricDetail = async () => {
    try {
      const data = await api.detail.getFabricDetail(372);
      setFabricData(data.data.acf);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSofaDetail();
    getFabricDetail();
  }, []);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 沙發 - Facade'}
        description={
          '喜與怒之間、哀與樂之間，以絕對的休息作為重新啟動的儀式，不受影響，個別存在。'
        }
        keywords={'家具,精品沙發,沙發,自由立面,facade'}
      />
      {detailData && (
        <div className="page-facade">
          <BannerDOM detailImg={detailData.banner} />
          <Tabs>
            <TabList>
              <Tab>一字型</Tab>
              <Tab>一字型兩件式</Tab>
            </TabList>
            <TabPanel>
              <div className="detail-content">
                <ul className="item-area">
                  <li className="item-list">
                    <p className="item-title">價格</p>
                    <span className="item-content">
                      <p>{detailData.tab1.price.price1}</p>
                      <p>{detailData.tab1.price.price2}</p>
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
                    </span>
                  </li>
                  <li className="item-list">
                    <p className="item-title">材質</p>
                    <span className="item-content">
                      {detailData.tab1.material}
                    </span>
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
                    <span className="item-content">
                      {detailData.tab1.fabric}
                    </span>
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="detail-content">
                <ul className="item-area">
                  <li className="item-list">
                    <p className="item-title">價格</p>
                    <span className="item-content">
                      <p>{detailData.tab2.price.price1}</p>
                      <p>{detailData.tab2.price.price2}</p>
                      <p style={{ paddingTop: '8px' }}>
                        {detailData.tab2.price.remark}
                      </p>
                    </span>
                  </li>
                  <li className="item-list">
                    <p className="item-title">尺寸</p>
                    <span className="item-content">
                      <p>{detailData.tab2.size.size1}</p>
                      <p>{detailData.tab2.size.size2}</p>
                      <p>{detailData.tab2.size.size3}</p>
                    </span>
                  </li>
                  <li className="item-list">
                    <p className="item-title">材質</p>
                    <span className="item-content">
                      {detailData.tab2.material}
                    </span>
                  </li>
                  <li className="item-list">
                    <p className="item-title">備註</p>
                    <span className="item-content">
                      <p>{detailData.tab2.remark.remark1}</p>
                      <p>{detailData.tab2.remark.remark2}</p>
                    </span>
                  </li>
                  <li className="item-list">
                    <p className="item-title">面料</p>
                    <span className="item-content">
                      {detailData.tab2.fabric}
                    </span>
                  </li>
                </ul>
              </div>
            </TabPanel>
          </Tabs>
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
        :global(.react-tabs__tab-list) {
          font-size: var(--f-s-16);
          width: 90%;
          margin: 25px auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          :global(.react-tabs__tab) {
            color: #a19e9d;
            background: var(--cr-background-primary);
            border-bottom: var(--cr-background-secondary);
            width: 50%;
            text-align: center;
          }
          :global(.react-tabs__tab--selected) {
            border-color: transparent;
            border-bottom: 3px solid #27284d;
            color: var(--cr-text-primary);
            font-weight: bold;
          }
        }
        .detail-content {
          padding: 8px 0px 0px 0px;
          width: 90%;
          line-height: 28px;
          .item-list {
            font-size: var(--f-s-14);
            margin-bottom: 25px;
            .item-title {
              font-size: var(--f-s-16);
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
          :global(.react-tabs__tab-list) {
            font-size: var(--f-s-18);
            :global(.react-tabs__tab--selected) {
              font-size: 120%;
            }
          }
          .detail-content {
            padding: 8px 0px 0px 25px;
            .item-list {
              font-size: var(--f-s-16);
              margin-bottom: 40px;
              .item-title {
                font-size: var(--f-s-18);
              }
            }
          }
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
            padding: 16px 0px 0px 60px;
          }
          .fabric-area {
            padding: 0px 80px;
          }
        }
      `}</style>
    </>
  );
}
