import React from 'react';
import { useRouter } from 'next/router';
import PageTransition from '@/components/Transition/PageTransition';
import Aside from '../Aside';

function Body(props) {
  const { keywordDataList } = props;

  return (
    <>
      <main id="main-content" role="main" className="main-content">
        <div className="container">
          {/* <PageTransition location={router.asPath}> */}
          {props.children}
          {/* </PageTransition> */}
        </div>
        <div className="aside">
          <Aside keywordDataList={keywordDataList} />
        </div>
      </main>
      <style jsx>{`
        .main-content {
          display: flex;
          height: 100%;
        }
        .container {
          margin-top: 5%;
          width: 80%;
        }
        .aside {
          width: 20%;
        }
      `}</style>
    </>
  );
}

export default Body;
