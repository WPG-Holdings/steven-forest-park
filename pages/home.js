import HeadMeta from '@/container/HeadMeta';
import styles from '../styles/Home.module.css';
import React, { useContext, useState, useEffect } from 'react';

import { ThemeContext } from '@/pages/_app';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import IconSvg from '@/components/IconSvg';
import ImageTitleDOML from '@/components/ImageTitleDOML';
import api from '@/api';

export default function Home() {
  const { useTheme } = useContext(ThemeContext);
  const [videoData, setVideoData] = useState();

  const getVideoList = async () => {
    try {
      const data = await api.list.getVideoList(448);
      setVideoData(data.data.acf.video);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 首頁'}
        description={'動心，盡在落座一刻'}
        keywords={'精品家具,沙發,床架,單椅,時尚,家具,生活美學'}
      />
      <div id="page-home" className="page-home">
        <div className="banner-area">
          <AliceCarousel
            autoPlay
            touchTrackingEnabled
            autoPlayInterval="3000"
            infinite="true"
          >
            <img
              className="home-banner"
              src="/image/primary-img/home-banner.jpg"
            ></img>
            <img
              className="home-banner"
              src="/image/primary-img/home-banner1.jpg"
            ></img>
            <img
              className="home-banner"
              src="/image/primary-img/home-banner2.jpg"
            ></img>
          </AliceCarousel>
        </div>
        <div className="video-area">
          <video playsInline autoPlay loop muted>
            <source src="Dung-Jing-home.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="slogan-area">
          <span className="slogan-primary-title">動心，盡在落座一刻</span>
          <div className="secondary-area">
            <ImageTitleDOML
              sloganTitle={'工藝 x 品味 x 經典 x 簡約'}
              sloganImg={'/image/primary-img/slogan-banner1.jpg'}
            />
            <ImageTitleDOML
              sloganTitle={'開幕獨享價，入手正是時候'}
              sloganImg={'/image/primary-img/slogan-banner2.jpg'}
            />
            <ImageTitleDOML
              sloganTitle={'展間落成，邀您親手觸碰構造與材質之美'}
              sloganImg={'/image/primary-img/slogan-banner3.jpg'}
            />
          </div>
        </div>
        <div className="sloganText-area">
          <div className="text-area">
            <p>我們以造型、工序、機能、價格的平衡</p>
            <p>踏出美感帶入當代居家場域的新一步</p>
            <p>讓你的客廳裡擁有一座可以坐、可以摸、可以躺的微型美術館</p>
          </div>
        </div>
        <div className="slogan-area">
          <span className="slogan-primary-title">
            一張沙發就能決定空間，就像時尚總能主導整個時代
          </span>
          <div className="secondary-area">
            <ImageTitleDOML
              sloganTitle={'經典形貌'}
              sloganImg={'/image/primary-img/slogan-banner4.jpg'}
            />
            <ImageTitleDOML
              sloganTitle={'職人手作'}
              sloganImg={'/image/primary-img/slogan-banner5.jpg'}
            />
            <ImageTitleDOML
              sloganTitle={'十年保固'}
              sloganImg={'/image/primary-img/slogan-banner6.jpg'}
            />
          </div>
        </div>
        <div className="purchase-process">
          <p className="process-title">選購流程</p>
          <span className="process-content">
            <li>
              瀏覽心儀的沙發款式
              <p>
                東璟選品以兼具高雅質感與客戶好評的沙發款式為主打，省去您抉擇的困擾。
              </p>
            </li>
            <li>
              選擇尺寸、表布材質
              <p>
                沙發價格的最大差異來自不同的布皮面，選對了，入手質感家具會比想像中更簡單。
              </p>
            </li>
            <li>
              提出初步需求
              <p>您可透過電子郵件或電話與我們聯繫，亦歡迎您親臨現場體驗。</p>
            </li>
            <li>
              讓我們為您精確估價
              <p>根據您的需求，確認預算與交期。</p>
            </li>
            <li>
              確認下單並開始製作
              <p>由我們以40年經驗監製，為您傾心打造客廳裡的美學焦點。</p>
            </li>
            <li>
              成品送達您的家中
              <p>製作完成後，我們會將成品妥善包裝運送至您的家中。</p>
            </li>
          </span>
        </div>
      </div>
      <style jsx>{`
        :global(.container) {
          padding: 0px;
          max-width: 100%;
        }
        .home-banner {
          max-width: 100%;
          height: auto;
          padding: 0px;
        }

        :global(.alice-carousel__dots) {
          margin: 0px;
          position: absolute;
          bottom: 0px;
          left: 2%;
          :global(.alice-carousel__dots-item) {
            width: 5px;
            height: 5px;
          }
          :global(.alice-carousel__dots-item:not(.__custom):not(:last-child)) {
            margin-right: 10px;
          }
        }
        :global(.alice-carousel__prev-btn) {
          display: none;
        }
        :global(.alice-carousel__next-btn) {
          display: none;
        }

        .slogan-area {
          padding: 60px 0px;
          background-color: var(--cr-background-secondary);
          .slogan-primary-title {
            margin-left: 7%;
            width: 90%;
            display: inline-block;
            font-size: var(--f-s-22);
            color: var(--cr-text-secondary);
            line-height: 40px;
            border-left: 5px solid var(--cr-text-secondary);
            padding-left: 20px;
          }
        }
        .sloganText-area {
          display: flex;
          justify-content: center;
          background-color: var(--cr-background-secondary);
          font-weight: bold;
          color: var(--cr-text-secondary);
          text-align: center;
          font-size: var(--f-s-16);
          line-height: 36px;
          .text-area {
            width: 90%;
            border-top: 3px solid var(--cr-text-tertiary);
            border-bottom: 3px solid var(--cr-text-tertiary);
            padding-top: 60px;
            padding-bottom: 60px;
            p {
              margin: 0;
              padding: 16px;
            }
          }
        }
        video {
          object-fit: cover;
          width: 100%;
          height: auto;
          top: 0;
          left: 0;
        }

        .purchase-process {
          padding: 0px 22px;
          .process-title {
            font-size: var(--f-s-24);
            font-weight: bold;
            text-align: center;
            color: var(--cr-text-quarternary);
            padding: 20px 0px;
          }
          .process-content {
            font-size: var(--f-s-16);
            width: 90%;
            li {
              font-weight: bold;
              margin: 0px 0px 25px 0px;
            }
            p {
              margin-left: 22px;
              font-weight: 400;
              line-height: 28px;
            }
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaXSmall}px) {
          :global(.alice-carousel__dots) {
            bottom: 1%;
            :global(.alice-carousel__dots-item) {
              width: 8px;
              height: 8px;
            }
            :global(.alice-carousel__dots-item:not(.__custom):not(:last-child)) {
              margin-right: 20px;
            }
          }
          .slogan-area {
            .slogan-primary-title {
              font-size: var(--f-s-26);
              margin: 20px 0 80px 8%;
              padding-left: 36px;
            }
          }
          .sloganText-area {
            font-size: var(--f-s-22);
            .text-area {
              p {
                margin: 0;
                padding: 20px;
              }
            }
          }
          .purchase-process {
            .process-title {
              font-size: var(--f-s-30);
            }
            p {
              margin-left: 22px;
            }
            .process-content li {
              margin: 0px 0px 25px 40px;
            }
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaMedium}px) {
          :global(.alice-carousel__dots) {
            :global(.alice-carousel__dots-item) {
              width: 12px;
              height: 12px;
            }
            :global(.alice-carousel__dots-item:not(.__custom):not(:last-child)) {
              margin-right: 20px;
            }
          }
          .slogan-area {
            .slogan-primary-title {
              font-size: var(--f-s-40);
              margin: 20px 0 80px 10%;
              padding-left: 36px;
            }
            .secondary-area {
              margin-top: 60px;
            }
          }
          .sloganText-area {
            font-size: var(--f-s-28);
            .text-area {
            }
          }
        }
      `}</style>
    </>
  );
}
