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
              <p className="link-title">ITU5</p>
              <ul className="link-list list-s0">
                <li className="link-item btn-ot">
                  <Link href="/sofaList">
                    <a id="footer-link-item-sofa"></a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="/bedList">
                    <a id="footer-link-item-bed">DDT</a>
                  </Link>
                </li>
                <li className="link-item btn-ot">
                  <Link href="/chairList">
                    <a id="footer-link-item-chair">DDB</a>
                  </Link>
                </li>
              </ul>
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
      `}</style>
    </>
  );
}

export default Footer;
