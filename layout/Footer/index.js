import React, { useState, useEffect, useContext } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from '@/pages/_app';

function Footer() {
  const { useTheme } = useContext(ThemeContext);
  const width = useMediaQuery(0);

  const footerItem = [
    { value: 'dynastyid', name: '衡美 | 閣美' },
    { value: 'nerverland', name: '小國生活' },
    { value: 'andari-group', name: '安得利集團' },
    { value: 'happy-future', name: '文泰興業' },
    { value: 'green-city', name: '綠都家飾' },
    { value: 'yisinai', name: '伊思奈家飾' },
    { value: 'ligo', name: '利谷' },
    { value: 'fantasyarts', name: '凡特思國際' },
    { value: 'cftlawyer', name: '大仁律師事務所' },
  ];

  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-nav-left">
            <div className="link-block g-center">
              <p className="link-title">產品系列</p>
              <ul className="link-list list-s0">
                <li className="link-item btn-ot">
                  <Link href="/sofaList">
                    <a id="footer-link-item-sofa">沙發</a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="/bedList">
                    <a id="footer-link-item-bed">床架</a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="/chairList">
                    <a id="footer-link-item-chair">書椅餐椅</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="link-block g-center">
              <p className="link-title">關於東璟</p>
              <ul className="link-list list-s0">
                <li className="link-item btn-ot">
                  <Link href="/location">
                    <a id="footer-link-item-service">聯絡我們</a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="https://www.facebook.com/%E6%9D%B1%E7%92%9F%E5%AE%B6%E5%85%B7-106292538033380">
                    <a id="footer-link-item-community" target="_blank">
                      粉絲社群
                    </a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="/terms">
                    <a id="footer-link-item-terms">網站使用條款</a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="/privacy">
                    <a id="footer-link-item-privacy">隱私權和 Cookie 政策</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="link-block g-center">
              <p className="link-title">合作夥伴</p>
              <ul className="link-list list-s0 item-more">
                {footerItem.map((item, index) => (
                  <li key={index} className="link-item">
                    <span
                      id={`footer-link-item-${item.value}`}
                      className="link-more"
                    >
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-nav-right">
            <p style={{ fontWeight: 'bold' }}>東璟家具有限公司</p>
            <p style={{ color: '#fff' }}>
              Copyright © 2021 DUNG JING 保留一切權利。
            </p>
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
      </footer>
      <style jsx>{`
        .footer {
          font-size: var(--f-s-12);
          color: var(--cr-text-secondary);
          background: var(--cr-background-secondary);
          padding: 10px 16px;
          margin-top: 100px;
          position: relative;
          width: 100%;
          height: auto;
          z-index: 1;
          .footer-nav-left {
            display: flex;
            flex-direction: column;
            .link-block {
              display: block;
              margin-bottom: 16px;
              .link-title {
                font-size: var(--f-s-14);
                color: var(--cr-text-tertiary);
                font-weight: bold;
                margin-bottom: 16px;
              }
              .link-list {
                display: flex;
                flex-wrap: wrap;
                color: var(--cr-text-secondary);
                .link-item {
                  margin: 0px 12px 12px 0px;
                }
              }
            }
          }
          .footer-nav-right {
            color: var(--cr-text-tertiary);
            .add-line {
              margin-top: 24px;
            }
          }
        }
        @media only screen and (min-width: ${useTheme.layout.mediaSmall}px) {
          .footer {
            font-size: var(--f-s-14);
            padding: 25px 40px 10px 40px;
            .footer-container {
              display: flex;
              .footer-nav-left {
                display: flex;
                flex-basis: 80%;
                flex-direction: row;
                justify-content: space-between;
                margin-right: 40px;
                .link-block {
                  display: block;
                  .link-title {
                    font-size: var(--f-s-16);
                    margin-bottom: 25px;
                  }
                  .link-list {
                    flex-direction: column;
                  }
                }
              }
            }
          }
        }
        @media only screen and (min-width: 1150px) {
          .footer .footer-nav-left {
            .link-block {
              margin-right: 200px;
              .item-more {
                height: 120px;
                .link-more {
                  margin: 0px 40px 12px 0px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
