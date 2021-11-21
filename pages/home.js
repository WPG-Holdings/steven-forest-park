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
        <p>Search It!!!!!!!!!!!!!</p>
      </div>
      <style jsx>{`
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

        @media only screen and (min-width: ${useTheme.layout.mediaXSmall}px) {
          .sloganText-area {
            font-size: var(--f-s-22);
            .text-area {
              p {
                margin: 0;
                padding: 20px;
              }
            }
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaMedium}px) {
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
