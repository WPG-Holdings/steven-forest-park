import React, { useState, useEffect, useContext } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from '@/pages/_app';

function Footer() {
  const { useTheme } = useContext(ThemeContext);
  const width = useMediaQuery(0);
  const router = useRouter();
  const isSearchPage = router.pathname === '/search';

  const footerItem = [
    { name: 'ITU1' },
    { name: 'ITU3' },
    { name: 'ITU5' },
    { name: 'ITU6' },
    { name: 'ITU7' },
    { name: 'ITU8' },
    { name: 'ITU9' },
    { name: 'DSU' },
    { name: 'SSC' },
    { name: 'AM' },
  ];

  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="department-section">
            <span className="contact-us-title">聯絡我們</span>
            {footerItem.map((item, index) => {
              return <span className="department">{item.name}</span>;
            })}
          </div>
          <div className="copyright-text">Copyright © 2021 WPG Holdings</div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          position: ${!isSearchPage ? 'absolute' : 'relative'};
          background: #5a5657;
          color: #fff;
          font-size: 12px;
          bottom: 0px;
          height: 100px;
          width: 100%;
          margin-top: ${!isSearchPage ? '0' : '200px'};
          .footer-content {
            padding: 0 22px;
            margin: 0 auto;
          }
          .department-section {
            display: flex;
            padding: 20px 10px;
            .contact-us-title {
              font-size: 14px;
              font-weight: bold;
              color: #84a3bc;
            }
            .department {
              margin-left: 30px;
            }
          }
          .copyright-text {
            text-align: right;
            margin-right: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
