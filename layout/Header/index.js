import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '@/pages/_app';
import Logo from '@/components/Logo';
import IconSvg from '@/components/IconSvg';
import Link from 'next/link';
import clsx from 'clsx';
import BackgroundLayer from '@/components/BackgroundLayer';
import { useScrollPosition } from '@/hooks/useScrollPosition';

function Header() {
  const menuWidth = 220;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHideItems, setIsHideItems] = useState('');
  const { useTheme } = useContext(ThemeContext);
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 300ms ease-in',
  });

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const HEADER_HIDE_SCROLL_Y = 100;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      // const isVisible = currPos.y > prevPos.y || currPos.y === 0;
      const isHide =
        currPos.y < prevPos.y && Math.abs(currPos.y) > HEADER_HIDE_SCROLL_Y;

      const shouldBeStyle = {
        visibility: isHide ? 'hidden' : 'visible',
        transition: `transform 500ms ${
          isHide ? 'ease-out' : 'ease-in'
        },visibility 500ms ${isHide ? 'ease-out' : 'ease-in'}`,
        transform: isHide ? 'translate(0, -100%)' : 'none',
      };

      if (
        isNavOpen ||
        JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)
      )
        return;

      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );

  return (
    <>
      <header
        id="page-header"
        className="page-header"
        style={{ ...headerStyle }}
      >
        <div className="main-header">
          <div
            onMouseLeave={handleNavClose}
            className={clsx('header-nav', {
              open: isNavOpen,
            })}
          >
            <button
              className={clsx('button-s0 close-button', {
                'button-hide': isHideItems === 'product-list',
              })}
              onClick={handleNavClose}
            >
              <IconSvg
                fill="none"
                stroke="#27284d"
                strokeWidth={1.5}
                size={22}
                type="closeX"
                className="closeX"
              />
            </button>
            <nav className="nav-content g-flex g-vertical">
              <ul className="nav-list g-flex g-vertical list-s0">
                <li className="nav-list-item">
                  <Link href="/about">
                    <a
                      className="list-item-link"
                      id="about-dung-jing"
                      onClick={handleNavClose}
                    >
                      關於東璟
                    </a>
                  </Link>
                </li>
                <li className="nav-list-item">
                  <Link href="/craftsmanship">
                    <a
                      className="list-item-link"
                      id="craftsmanship"
                      onClick={handleNavClose}
                    >
                      製作工藝
                    </a>
                  </Link>
                </li>
                <li
                  className="nav-list-item have-sublist"
                  onMouseEnter={() => setIsHideItems('product-list')}
                  onMouseLeave={() => setIsHideItems('')}
                >
                  <a className="list-item-link" id="product-list">
                    產品介紹
                  </a>
                  <ul className="list-item-sublist g-flex g-vertical g-center list-s0">
                    <span className="border-line"></span>
                    <button
                      className="button-s0 close-button"
                      onClick={handleNavClose}
                    >
                      <IconSvg
                        fill="none"
                        stroke="#27284d"
                        strokeWidth={1.5}
                        size={22}
                        type="closeX"
                        className="closeX"
                      />
                    </button>
                    <li className="nav-sublist-item">
                      <Link href="/sofaList">
                        <a id="sofalist" onClick={handleNavClose}>
                          <img
                            className="sublist-image"
                            src="/about-sofa-banner.jpg"
                          ></img>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-sublist-item">
                      <Link href="/bedList">
                        <a id="bedlist" onClick={handleNavClose}>
                          <img
                            className="sublist-image"
                            src="/about-bed-banner.jpg"
                          ></img>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-sublist-item">
                      <Link href="/chairList">
                        <a id="chairlist" onClick={handleNavClose}>
                          <img
                            className="sublist-image"
                            src="/about-chair-banner.jpg"
                          ></img>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-list-item">
                  <Link href="/home">
                    <a
                      className="list-item-link"
                      id="home-page"
                      onClick={handleNavClose}
                    >
                      首頁
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <BackgroundLayer isShow={isNavOpen} bgColor={'rgba(0, 0, 0, 0.7)'} />
          <div className="header-content g-flex">
            <button className="button-s0" onMouseOver={handleNavOpen}>
              <IconSvg
                fill="none"
                stroke="#f8f9ff"
                strokeWidth={1.5}
                size={22}
                type="Menu"
                className="menu"
              />
            </button>
            <div className="header-logo">
              <Logo width={'60px'} height={'60px'} />
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .page-header {
          position: fixed;
          height: var(--header-height);
          width: 100%;
          z-index: 110;
          background-color: rgba(0, 3, 36, 0.9);
        }
        .main-header {
          padding: 0 15px;
          display: flex;
          height: inherit;
        }
        .header-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .header-content {
          position: relative;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: inherit;
        }
        .header-nav {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          transform: translate(-100%);
          width: 100%;
          height: 100vh;
          transition: transform 0.3s ease;

          &.open {
            z-index: 110;
            transform: translate(0);
          }
          .close-button {
            position: absolute;
            top: var(--s-12);
            right: var(--s-12);
          }
        }
        .nav-content {
          height: inherit;
          background-color: rgba(248, 249, 2550, 0.9);
        }
        .nav-list {
          justify-content: center;
          flex: 70%;
        }
        .sub-list {
          flex: 30%;
        }
        .header-sub-list {
          align-items: center;
          height: 100%;
        }
        .nav-list-item {
          color: var(--cr-background-secondary);
          .list-item-link {
            display: inline-block;
            padding: var(--s-24) 0;
            margin-left: calc(${menuWidth}px / 3);
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.15em;
            position: relative;
            :after {
              content: '';
              display: block;
              height: 2px;
              left: 50%;
              position: absolute;
              background: var(--cr-background-secondary);
              transition: width 0.3s ease 0s, left 0.3s ease 0s;
              width: 0;
            }
            :hover {
              font-weight: bold;
              font-size: 120%;
              :after {
                width: 100%;
                left: 0;
              }
            }
          }
          &.have-sublist {
            &:hover {
              .list-item-sublist {
                opacity: 1;
                visibility: visible;
              }
            }
          }
          .list-item-sublist {
            transition: visibility 0.3s ease, opacity 0.3s ease;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 101;
            padding: 50px 0px;
            background-color: rgba(248, 249, 2550, 1);

            .nav-sublist-item {
              text-align: center;
              flex: 1;

              a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: var(--s-12);
              }
              .sublist-image {
                width: 100%;
                height: auto;
                opacity: 0.7;
                :hover {
                  opacity: 1;
                }
              }
              :hover {
                font-weight: bold;
              }
            }
          }
        }
        .button-hide {
          opacity: 0;
          visibility: hidden;
        }
        @media only screen and (min-width: ${useTheme.layout.mediaXSmall}px) {
          .header-nav {
            width: ${menuWidth}px;
            transform: translate(-${menuWidth}px);
          }
          .nav-list-item .list-item-sublist {
            left: ${menuWidth}px;
            width: ${menuWidth}px;
            background-color: rgba(248, 249, 2550, 0.9);
            .border-line {
              position: absolute;
              top: 5%;
              left: 0;
              height: 90%;
              border-left: 1px solid #27284d;
            }
          }
        }
      `}</style>
    </>
  );
}

export default Header;
