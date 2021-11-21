import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import api from '@/api';

export default function Craftsmanship() {
  const { useTheme } = useContext(ThemeContext);
  const [videoData, setVideoData] = useState();

  const getVideoList = async () => {
    try {
      const data = await api.list.getVideoList(378);
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
        title={'東璟家具 - 製作工藝'}
        description={'打造少即是多的美學量體'}
        keywords={
          '經典永續,職人手工,人體工學,精品質感,40年精湛思維把關,美學,實用機能,精工細節,居家風格'
        }
      />
      <div className="page-craftsmanship">
        {videoData && (
          <div className="video-area">
            <video controls>
              <source src={videoData} type="video/mp4"></source>
            </video>
          </div>
        )}
        <h1 className="page-title">打造少即是多的美學量體</h1>
        <div className="craftsmanship-detail">
          <div className="craftsmanship-slogan">
            <table>
              <thead>
                <tr className="slogan-title">
                  <th>經典永續</th>
                  <th>職人手工</th>
                  <th>人體工學</th>
                  <th>精品質感</th>
                </tr>
              </thead>
              <tbody>
                <tr className="slogan-content">
                  <td data-title="經典永續">融入任何居家風格</td>
                  <td data-title="職人手工">40年精湛思維把關</td>
                  <td data-title="人體工學">兼具美學與實用機能</td>
                  <td data-title="精品質感">整體架構到精工細節</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="craftsmanship-step">
            <div className="craftsmanship-area">
              <p className="craftsmanship-title">一、選擇樣式與材質</p>
              <p className="craftsmanship-content">
                哪個樣貌與質感適合您？隨心挑選或者由我為您引薦。
              </p>
            </div>
            <div className="craftsmanship-area">
              <p className="craftsmanship-title">二、進行打版</p>
              <p className="craftsmanship-content">
                依據您所選擇的樣式，解構並微調沙發的各個部位組成。
              </p>
            </div>
            <div className="craftsmanship-area">
              <p className="craftsmanship-title">三、骨架構成</p>
              <p className="craftsmanship-content">
                以硬度高、承重佳的嚴選實木，製作沙發的主結構框架。
              </p>
            </div>
            <div className="craftsmanship-area">
              <p className="craftsmanship-title">四、結構打底</p>
              <p className="craftsmanship-content">
                高規格德泰S彈簧與織布帶或小鋼圈構成椅底，比僅採用皮帶固定的平價作法擁有更穩固的支撐力。
              </p>
            </div>
            <div className="craftsmanship-area">
              <p className="craftsmanship-title">五、主體填充</p>
              <p className="craftsmanship-content">
                依據坐感與造型需求不同，採用高密度泡綿、乳膠墊材料不同工法成型。
              </p>
            </div>
            <div className="craftsmanship-area">
              <p className="craftsmanship-title">六、裁剪車縫與覆面</p>
              <p className="craftsmanship-content">
                將沒有瑕疵的牛皮或布料裁片以高拉力線材縫合，繃覆於沙發本體上固定完成。
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.container) {
          padding: 0px;
          max-width: 100%;
        }
        .craftsmanship-detail {
          padding: 0 22px;
        }
        video {
          object-fit: cover;
          width: 100%;
          height: auto;
          top: 0;
          left: 0;
        }
        .craftsmanship-slogan {
          margin: 60px 0px;
          font-size: var(--f-s-16);
          font-weight: bold;
          color: var(--cr-text-quarternary);
          text-align: center;
        }
        .craftsmanship-area {
          font-size: var(--f-s-16);
          width: 90%;
          margin: 0px 0px 25px 40px;
          .craftsmanship-title {
            font-weight: bold;
            color: var(--cr-text-quarternary);
          }
          .craftsmanship-content {
            color: var(--cr-text-primary);
            line-height: 28px;
            margin-left: 32px;
          }
        }

        table,
        th,
        td {
          border: 1px solid #27284d;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 16px;
        }

        table {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }

        td {
          line-height: 24px;
        }

        @media only screen and (max-width: ${useTheme.layout.mediaXSmall}px) {
          .page-title {
            font-size: var(--f-s-30);
          }
          .craftsmanship-slogan {
            margin: 40px 0px;
          }
          .craftsmanship-area {
            font-size: var(--f-s-14);
            margin: 0px 0px 25px 0px;
            width: 95%;
            .craftsmanship-content {
              margin-left: 28px;
            }
          }

          thead {
            display: none;
          }
          table {
            width: 100%;
          }
          td {
            display: flex;
            &::before {
              content: attr(data-title);
              display: inline-block;
              text-align: left;
              border-right: 1px solid #27284d;
              max-width: 80px;
              min-width: 80px;
              margin-right: 16px;
            }
          }
        }
      `}</style>
    </>
  );
}
