import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import LoginDialog from '@/components/Dialog/loginDialog';

const logoImg = '/static/images/logo.png';

function Header() {
  const menuWidth = 220;

  const [open, setOpen] = useState(false);

  return (
    <>
      <header id="page-header" className="page-header">
        <div className="main-header">
          <Link href="/">
            <a id="logo" className="logo">
              <img src={logoImg} alt="logo" title="logo" />
            </a>
          </Link>
          <nav className="nav-section">
            <a className="nav-list-item">關於OP Keywords</a>
            <a className="nav-list-item">關鍵字庫</a>
            <button
              className="nav-list-item login-btn button"
              onClick={() => setOpen(true)}
            >
              登入
            </button>
          </nav>
        </div>
      </header>
      <LoginDialog setOpen={setOpen} open={open} />

      <style jsx>{`
        .page-header {
          position: fixed;
          height: var(--header-height);
          width: 100%;
          z-index: 110;
          background-color: #fff;
          .main-header {
            display: flex;
            img {
              width: auto;
              height: calc(var(--header-height) * 1.2);
            }
            nav {
              position: absolute;
              top: 20%;
              right: 5%;
              .nav-list-item {
                color: #626367;
                margin-left: 20px;
              }
              .login-btn {
                color: #fff;
                background-color: #005c9f;
                padding: 5px 20px;
                border-radius: 5px;
              }
            }
          }
        }
      `}</style>
    </>
  );
}

export default Header;
