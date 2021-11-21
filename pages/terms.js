import HeadMeta from '@/container/HeadMeta';
import React, { useContext } from 'react';
import { ThemeContext } from '@/pages/_app';

export default function Terms() {
  const { useTheme } = useContext(ThemeContext);
  return (
    <>
      <HeadMeta
        title={'東璟家具 - 網站使用條款'}
        description={'網站使用條款'}
        keywords={'網站使用條款'}
      />
      <div className="page-terms">
        <h1 className="page-title">網站使用條款</h1>
        <div className="detail-content">
          <div className="terms-area">
            <p className="terms-title">一、網站合法授權使用：</p>
            <p className="terms-content">
              當您進入並使用本網站時，即表示您已同意有關為保障合法或其他目的之系統監視執行；任何非經合法授權使用本網站之行為均可能使您遭致刑事起訴或罰款制裁。
            </p>
          </div>
          <div className="terms-area">
            <p className="terms-title">二、用戶同意接受本「使用條款」：</p>
            <p className="terms-content">
              當您進入並使用本網站，即視同您已同意遵守本「使用條款」與其他有關著作權、版權、商標專用權、網路智慧財產權、隱私權等之法律規定。
            </p>
          </div>
          <div className="terms-area">
            <p className="terms-title">三、保留權利：</p>
            <p className="terms-content">
              本網站不定時增刪修改網頁資訊內容，或變更網頁服務功能，無需事先或另行通知用戶；亦得不定時修訂本「使用條款」，並於網站張貼時隨即生效，無需事先或另行通知用戶或對用戶負擔任何責任。
              <br />
              用戶須遵守之規則：
              <li>
                用戶不得利用本網站電腦系統、網路通訊相關資源、或提供之服務從事違法之行為；不得藉由本中心網站進行任何恐嚇、誹謗、騷擾、冒犯他人之活動，或其他任何犯罪行為。
              </li>
              <li>
                本網站存用、顯示之資料與內容，包括企業標誌、商標、服務標章等一切智慧財產權屬於凱萊保險代理人股份有限公司的財產；用戶未經授權不得企圖使用、存取、或使用儲存於本中心系統之資料或程式；亦不得傳播、複製、修改、發佈或傳送。
              </li>
              <li>
                用戶不得進行任何不利於本站、可能對網路正常傳輸造成不利影響的行為。
              </li>
              <li>
                用戶對本站網站或其中提供之資訊不具備任何權利；用戶不得為其他任何目的，以其他任何方式使用本中心網站所提供之資訊或服務。
              </li>
              <li>
                用戶不得向本站網站輸入或上載任何含有病毒、或其他意圖損害、干擾、降低本中心之系統或網路效率或相關之服務品質之電腦程式路徑。
              </li>
            </p>
          </div>
          <div className="terms-area">
            <p className="terms-title">四、外部網站之連接：</p>
            <p className="terms-content">
              本網站可能提供其他網站連結之情形，用戶承認並同意本中心對該等第三方網站之內容、正確性、或有效性，不負任何責任。
            </p>
          </div>
          <div className="terms-area">
            <p className="terms-title">五、違約賠償：</p>
            <p className="terms-content">
              用戶違反本使用條款或其他相關之著作權法、民法、刑法法律規定，以致對本中心或其他任何第三者造成損失，用戶同意負擔由此造成之損害賠償責任。
            </p>
          </div>
          <div className="terms-area">
            <p className="terms-title">六、法律管轄：</p>
            <p className="terms-content">本「使用條款」適用中華民國法律。</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .terms-area {
          font-size: var(--f-s-12);
          margin-bottom: 25px;
          width: 95%;
          .terms-title {
            font-weight: bold;
            color: var(--cr-text-primary);
          }
          .terms-content {
            color: var(--cr-text-primary);
            line-height: 28px;
            margin-left: 24px;
            li {
              text-indent: -18px;
            }
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaXSmall}px) {
          .terms-area {
            font-size: var(--f-s-16);
            .terms-content {
              margin-left: 32px;
              li {
                width: 85%;
                margin-left: 24px;
                text-indent: -20px;
              }
            }
          }
        }

        @media only screen and (min-width: ${useTheme.layout.mediaMedium}px) {
          .terms-area {
            width: 100%;
            .terms-content li {
              text-indent: -22px;
            }
          }
        }
      `}</style>
    </>
  );
}
