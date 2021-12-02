import HeadMeta from '@/container/HeadMeta';
import styles from '../styles/Home.module.css';
import React, { useContext, useState, useEffect } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import api from '@/api';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const [queryString, setQueryString] = useState(router.query.q);

  useEffect(() => {
    const initQueryString = router.query.q;
    setQueryString(initQueryString);
    // initDataHandler(initQueryString);
  }, [router]);

  const handleSearch = (queryString) => {
    try {
      router.push({
        pathname: '/search',
        query: { q: queryString },
      });
    } catch (error) {
      console.log('handleSearch -> error', error);
    }
  };

  return (
    <>
      <HeadMeta
        title={'OP Keywords - 首頁'}
        description={'OP Keywords'}
        keywords={'OP Keywords'}
      />
      <div id="homePage" className="home-page">
        <div className="search-bar-section">
          <h1>
            <span className="gray">O O O O O </span>
            <span className="blue">P </span>
            <span className="blue">K</span>
            <span className="skyBlue">ey</span>
            <span className="gray">word</span>
            <span className="yellow">s</span>
          </h1>
          <SearchBar
            type={'main'}
            onHandleSearch={handleSearch}
            onChangeInput={setQueryString}
            queryString={queryString}
          />
        </div>
      </div>
      <style jsx>{`
        .home-page {
          display: flex;
          justify-content: center;
          h1 {
            text-align: center;
          }
          .search-bar-section {
            width: 80%;
            margin-top: 10%;
          }
          .keywords-aside-chart {
            width: 20%;
            margin-top: 5%;
          }
        }
        .gray {
          color: #626367;
        }
        .blue {
          color: #005c9f;
        }
        .skyBlue {
          color: #84a3bc;
        }
        .yellow {
          color: #ffc849;
        }
      `}</style>
    </>
  );
}
