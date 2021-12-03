import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import Body from './Body';
import api from '@/api';
import Footer from './Footer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ThemeContext } from '@/pages/_app';

function Layout(props) {
  const [keywordDataList, setKeywordDataList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const hotKeywordData = await api.search.getHotKeywordCounts();
        setKeywordDataList(hotKeywordData.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div id="page-site" className="page-site">
      <Header />
      <Body keywordDataList={keywordDataList}>{props.children}</Body>
    </div>
  );
}

export default Layout;
