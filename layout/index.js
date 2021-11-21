import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ThemeContext } from '@/pages/_app';

function Layout(props) {
  const windows = useMediaQuery(0);
  const { useTheme } = useContext(ThemeContext);
  const [isShowCookieBar, setIsShowCookieBar] = useState(false);
  const [isTabletDown, setIsTabletDown] = useState(true);

  useEffect(() => {
    setIsTabletDown(windows.width > useTheme.layout.mediaMedium ? false : true);
  }, [windows.width]);

  return (
    <div id="page-site" className="page-site">
      <Header isTabletDown={isTabletDown} />
      <Body>{props.children}</Body>
      <Footer isTabletDown={isTabletDown} />
    </div>
  );
}

export default Layout;
