import HeadMeta from '@/container/HeadMeta';
import IconSvg from '@/components/IconSvg';
import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';

export default function Location() {
  const { useTheme } = useContext(ThemeContext);

  const showInMapClicked = () => {
    window.open(
      'https://www.google.com/maps/place/221新北市汐止區大安街52巷15號/@' +
        25.073303 +
        ',' +
        121.6762103,
      18.57
    );
  };

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 營業據點'}
        description={'東璟家具 - 台北總部'}
        keywords={'家具,新北市,汐止'}
      />
      <div className="page-location">
        <h1 className="page-title">營業據點</h1>
        <div className="detail-content">
          <div className="left-area">
            <h2 className="content-title">台北總部</h2>
            <div className="content-area">
              <p className="area-title">公司地址：</p>
              <div
                className="btn-ot g-flex g-center"
                onClick={showInMapClicked}
              >
                <span style={{ marginRight: '8px' }}>
                  221 新北市汐止區大安街52巷15號
                </span>
              </div>
            </div>
            <div className="content-area">
              <p className="area-title">聯絡電話：</p>
              <p>02-8648-0000 / 02-8648-0266</p>
            </div>
            <div className="content-area">
              <p className="area-title">聯絡信箱：</p>
              <span className="btn-ot g-flex g-center">
                <a
                  href="mailto:dungjing2021@gmail.com"
                  style={{ marginRight: '8px', color: '#1b5faa' }}
                >
                  dungjing2021@gmail.com
                </a>
              </span>
            </div>
            <div className="content-area">
              <p className="area-title">營業時間：</p>
              <p>8:00 - 17:00 假日預約制</p>
            </div>
            <div className="content-area g-center">
              <p className="area-title">聯絡我們：</p>
              <div className="add-line">
                <a href="https://lin.ee/WDir7PE">
                  <img
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
                    alt="加入好友"
                    height="36"
                    border="0"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="right-area">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.843204204175!2d121.67621031473142!3d25.0733029839539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d53dbcb6c49af%3A0x6396f70e965cc8eb!2z5p2x55Kf5a625YW3!5e0!3m2!1szh-TW!2stw!4v1612706378210!5m2!1szh-TW!2stw"
              width="100%"
              height="350"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content-title {
          margin-bottom: 36px;
        }
        .content-area {
          font-size: 16px;
          margin-bottom: 25px;
          .area-title {
            font-weight: bold;
            margin-right: 8px;
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
          .detail-content {
            display: flex;
            justify-content: space-between;
            .content-area {
              display: flex;
              margin-bottom: 16px;
            }
            .right-area {
              width: 60%;
            }
          }
        }
      `}</style>
    </>
  );
}
