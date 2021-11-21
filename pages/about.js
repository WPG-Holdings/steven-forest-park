import HeadMeta from '@/container/HeadMeta';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import api from '@/api';

export default function About() {
  const { useTheme } = useContext(ThemeContext);

  return (
    <>
      <HeadMeta
        title={'東璟家具 - 關於東璟'}
        description={
          '起居之間培養名流品、可以坐的微型美術館、極簡哲學更能造就豐富人生'
        }
        keywords={'關於東璟,東璟家具,微型美術館,極簡哲學'}
      />
      <div className="page-about">
        <div className="slogan-detail">
          <div className="slogan-area">
            <p className="slogan-title">起居之間培養名流品味</p>
            <p className="slogan-content">
              這個時代裡，知識是新的冠冕、美學與自我價值的展現方式緊密連結。東璟認為，沙發不僅要滿足乘坐的舒適需求，更是生活的品味起點，一張好的沙發能延長家族成員共聚高談的時光，還能潛移默化改變使用者鑑賞能力。從日常起居開始，邀您與您的家人共感生活之美。
            </p>
          </div>
          <div className="slogan-area">
            <p className="slogan-title">可以坐的微型美術館</p>
            <p className="slogan-content">
              家學淵源這個成語，在職人的傳承之間更顯珍貴。過去40年，成泰家具是無數政商名流、頂級豪宅商辦與知名設計公司的合作夥伴，五星級飯店頂級房型裡的家具常常出於我們之手；現在，我們將以東璟這個名字，求取將美感帶入當代居家場域的新一步，我們同樣堅持品質，卻更曉得活在這個世代的您，重視什麼樣的質感型態與居住限制。
            </p>
            <p className="slogan-content">
              東璟不僅強調型態美感與工序細節，也關注中產階級的適切消費方式。知道您不好高騖遠也不屈就、不揮霍金錢但揮霍風格，希望我們讓您的客廳裡也能擁有一座可以坐、可以摸、可以躺的微型美術館。
            </p>
          </div>
          <div className="slogan-area">
            <p className="slogan-title">極簡哲學更能造就豐富人生</p>
            <p className="slogan-content">
              享受美感，不該是件令人心煩的事。東璟改變舊有居家品牌款式繁雜的缺點，由我們為您事先挑選出兼具高雅簡約質感、空間坪數尺寸與客戶體驗好評的沙發款式，讓重視風格的您能自由揮灑室內裝潢，也讓崇尚簡單生活的您自然而然擁有空間的設計焦點。從此之後，您可以專注追求美、也可以專注在享受人生。
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.container) {
          padding: 0px;
          max-width: 100%;
        }
        .slogan-detail {
          padding: 0 22px;
        }
        .slogan-area {
          margin: 40px 0px;
          width: 95%;
          .slogan-title {
            font-size: 18px;
            font-weight: bold;
            color: var(--cr-text-quarternary);
          }
          .slogan-content {
            font-size: var(--f-s-16);
            color: var(--cr-text-primary);
            line-height: 30px;
          }
        }
        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
          .slogan-detail {
            padding: 0 120px;
          }
        }
      `}</style>
    </>
  );
}
