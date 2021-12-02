import React, { useState, useEffect, useContext } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeContext } from '@/pages/_app';

function Footer() {
  const { useTheme } = useContext(ThemeContext);
  const width = useMediaQuery(0);

  const footerItem = [
    { value: 'jason.ho@wpgholdings.com', name: 'ITU1' },
    { value: 'jason.ho@wpgholdings.com', name: 'ITU3' },
    { value: 'jason.ho@wpgholdings.com', name: 'ITU5' },
    { value: 'jason.ho@wpgholdings.com', name: 'ITU6' },
    { value: 'jason.ho@wpgholdings.com', name: 'ITU7' },
    { value: 'jason.ho@wpgholdings.com', name: 'ITU8' },
    { value: 'jason.ho@wpgholdings.com', name: 'ITU9' },
    { value: 'jason.ho@wpgholdings.com', name: 'DSU' },
    { value: 'jason.ho@wpgholdings.com', name: 'SSC' },
    { value: 'jason.ho@wpgholdings.com', name: 'AM' },
  ];

  return (
    <>
      <footer id="footer" className="footer">
        <div className="department-section">
          <span className="contact-us-title">聯絡我們</span>
          {footerItem.map((item, index) => {
            return <span className="department">{item.name}</span>;
          })}
        </div>
        <div className="copyright-text">Copyright © 2021 WPG Holdings</div>
      </footer>
      <style jsx>{`
        .footer {
          background: #5a5657;
          color: #fff;
          font-size: 12px;
          padding: 10px 0;
          margin-top: 120px;
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
