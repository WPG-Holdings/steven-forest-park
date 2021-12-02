import React, { Dispatch, SetStateAction } from 'react';
import ReactInfiniteScroll from 'react-infinite-scroll-component';
import clsx from 'clsx';
import Loading from '@/components/Loading';
import ReloadSection from '@/components/ReloadSection';

export default function InfiniteScroll(props) {
  const {
    dataLength,
    fetchMoreData,
    loadmore,
    hasMore,
    isEnd,
    endText,
    errorCode,
    isReloading,
  } = props;
  const LoaderDOM = (() => <Loading />)();

  const EndDOM = (() => {
    return (
      <>
        <div
          id="load-more-btn"
          className={clsx('btn-ot', {
            'infinite-scroll-more': true,
            'load-more': !isEnd,
          })}
          onClick={() => loadmore()}
        >
          {!isEnd ? <a className="t-heading">更多內容</a> : <p>{endText}</p>}
        </div>
        <style jsx>{`
          .infinite-scroll-more {
            margin-top: 25px;
            &.load-more {
              display: flex;
              justify-content: center;
              padding: 15px;
              border: 1px solid #999;
              background: #fff;
              cursor: pointer;
            }
            a {
              color: #000;
            }
            p {
              color: orange;
              font-size: 20px;
              text-align: center;
            }
          }
        `}</style>
      </>
    );
  })();

  return (
    <ReactInfiniteScroll
      dataLength={dataLength}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={LoaderDOM}
      endMessage={
        errorCode && errorCode !== 0 ? (
          <ReloadSection onReload={fetchMoreData} isLoading={isReloading} />
        ) : (
          EndDOM
        )
      }
      style={{ overflow: 'hidden' }}
      height={props.height}
    >
      {props.children}
    </ReactInfiniteScroll>
  );
}
