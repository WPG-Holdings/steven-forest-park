import React from 'react';
import { useRouter } from 'next/router';
import PageTransition from '@/components/Transition/PageTransition';

function Body(props) {
  const { query } = useRouter();
  const router = useRouter();

  return (
    <>
      <main id="main-content" role="main" className="main-content">
        <div className="container">
          {/* <PageTransition location={router.asPath}> */}
          {props.children}
          {/* </PageTransition> */}
        </div>
      </main>
      <style jsx>{`
        .main-content {
          padding-top: var(--header-height);
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default Body;
